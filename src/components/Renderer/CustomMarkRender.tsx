import HighlightJS from 'highlight.js'
import marked from "marked";
import hljs from "highlight.js";
// import "highlight.js/styles/dark.css"
// import "highlight.js/styles/hybrid.css"
import "highlight.js/styles/gruvbox-dark.css"
import mark from "../../pages/dev/mark";
import styled from "styled-components";
import ClipboardCopyWithModal from '../Atoms/Modal/ClipboardCopyWithModal'
import {ModalWrapper,CloseIcon,ClickWrapper,ClickIcon} from "../Atoms/Modal/ClipboardCopyWithModalStyle"
import React, {useCallback, useEffect, useState} from "react";
import ReactDOMServer from 'react-dom/server';

const nonSelect = {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
}

const MarkStyle = styled.div`
  width: 70%;
  margin: 0 auto;

  pre, code {
    padding: 0 0px 0px 0px;
    border-radius: 6px;
    line-height: 1.1rem;
  }

  pre {
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.4);
  }

  code {
    //padding: 0 5px 0 5px;
    //width: fit-content;
    //padding : 0 20px;
    //border-radius: 4px;
  }

  table {
    border-collapse: collapse;

    tbody:before {
      content: "-";
      display: block;
      line-height: 3px;
      color: transparent;
    }
  }

  td.line-number {
    display: inline-block;
    text-align: center;
    color: #ccc;
    border-right: 1px solid #999;
    vertical-align: top;
    padding-right: 5px;
    ${nonSelect}
  }

  td.line-content {
    padding-left: 5px;
  }

  code {
    span {
      //font-weight: bolder;
      //font-size: larger;
      //text-overflow: ellipsis;
    }
  }

  /* Technique to disable line numbers from being selected and copied. 
     Checkout this post for more details http://codepen.io/danoc/pen/ByGKZv */

  [data-pseudo-content]::before,
  [data-pseudo-content--before]::before,
  [data-pseudo-content--after]::after {
    content: attr(data-pseudo-content);
  }

  .code-header {
    display: inline-block;
    width: 100%;
    //.left{
    //  float: left;
    //}
    background: rgb(20, 55, 128);
    //background: linear-gradient(to right, rgb(8, 34, 101), rgb(20, 55, 128), rgb(255, 255, 255));
    padding: 2px 0px;
    //background: #cccccc;
    //border-bottom: 1px solid #eee;
    ${nonSelect}
  }

  .code-header-left {
    float: left;
    width: fit-content;
    //background: #282828;
    //font-size: larger;
    font-size: 0.8rem;
    font-weight: bolder;
    margin: 0;
    padding: 0px 6px;
    //border-radius: 1px;
  }

  .code-header-right {
    float: right;

    span {
      cursor: pointer;
      //font-size: larger;
      font-size: 0.7rem;
      color: #99b3ee;
      font-weight: 700;
      background: rgba(0, 0, 0, 0.015);
      //color: rgba(23, 158, 229, 1);
      padding: 0px 5px;
    }
  }

  textarea.code-copy {
    display: none;
  }
`
function createHighlightedCodeBlock (content : string) {
    let language ;
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        langPrefix: "hljs language-",
        highlight: function (code : string, lang: string) {
            const html = hljs.highlightAuto(code).value;

            const uLang = lang.charAt(0).toUpperCase() + lang.slice(1);
            const  codePattern = /<span class="hljs-comment">(.|\n)*?<\/span>/g


            const adaptedHighlightedContent = html.replace(codePattern, (data: string) => {
                return data.replace(/\r?\n/g, () => {
                    return '\n<span class="hljs-comment">'
                })
            })
                // console.log(adaptedHighlightedContent)
                //
            const contentTable = adaptedHighlightedContent.split(/\r?\n/).map((lineContent: string, idx: number) => {
                return `<tr>
                      <td class='line-number' data-pseudo-content=${++idx}></td>
                      <td class="line-content">${lineContent}</td>
                    </tr>`
            }).join('')

            return `<div class="code-wrapper"><div class="code-header"><div class="code-header-left">${uLang}</div><div class="code-header-right"><span class="copy-click">Copy<textarea class="code-copy">${code}</textarea></span></div></div><table class='code-table'>${contentTable}</table></div>`;
            }

    });
///<textarea class="code-copy">${code}</textarea>
    const html = marked(content);
    console.log(language)
    // console.log(html)
    return html;
}


type Props ={
    content : string
}

function createMarkup ( {content} : Props) {
    const [modal,setModal] = useState(false);
    console.log(content)
    // @ts-ignore
    const html = {__html: createHighlightedCodeBlock(content) };

    const doCopy = (text: string | null)=> {
        if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
        const textarea = document.createElement("textarea");
        if (textarea) {
            textarea.value =  text || '';
            textarea.style.top = String(0);
            textarea.style.left = String(0);
            textarea.style.display = "fixed";
        }
        document.body.appendChild(textarea);
        textarea.focus();   // focus() -> 사파리 브라우저 서포팅
        textarea.select();  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setModal(true)
    }

    useEffect(()=>{
        const list = document.querySelectorAll('.copy-click');
        console.log(list);
        list.forEach(item=>{
            item.addEventListener('click',function (){
                console.log(item.childNodes[1].textContent);
                doCopy(item.childNodes[1].textContent);
            }) ;
        })
        // console.log(list);
    },[])

    return (
        <div>
                {modal === true ? (
                    <ModalWrapper>
                        <div className={'modal-wrapper'}>
                            <div className={'modal-item'}>
                                {/*모달창 닫기*/}
                                <div className={'modal-btn-area'} onClick={()=>setModal(false)}>
                                    <CloseIcon/>
                                </div>
                                <div className={'modal-message-area'}>
                                    <div className={'modal-message'}>
                                        <p>{'클립보드에 복사되었습니다'}</p>
                                        <span>원하시는 곳에 Ctl+V 로 붙여넣기 하세요</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalWrapper> ) : null}
             <MarkStyle dangerouslySetInnerHTML={html}/>
        </div>
    )

}
export default createMarkup;