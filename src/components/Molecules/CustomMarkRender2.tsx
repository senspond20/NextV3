import HighlightJS from 'highlight.js'
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css"
import mark from "../../pages/dev/mark";
import styled from "styled-components";
import ClipboardCopyWithModal from  './ClipboardCopyWithModal'
import React from "react";
const MarkStyle = styled.div`
  pre,code{
    //margin: 0 10px;
    padding: 0 0px 0px 0px;
  }
  pre{
    //width: fit-content;
  }
  code{
    //padding: 0 5px 0 5px;
    //width: fit-content;
   
    //padding : 0 20px;
    border-radius: 4px;
  }
  .hljs-namespace {
    //background: #0055aa;
    //width: fit-content;
    color: red;
    //padding: 1px 10px;
    margin-bottom: 10px;
    //border-radius: 5px;
    display: block;
    //background: #cccccc;
  }
  table{
   border-collapse: collapse;
    
    thead{
      color: blue;
      //background: #cccccc;
      button {
        float: right;
      }
    }
    tbody:before {
      content: "-";
      display: block;
      line-height: 1em;
      color: transparent;
    }
  }
    .line-number {
      //text-align: center;
      //padding-right: 10px;
      display: inline-block;
      ////border-right: 1px solid red;
      //color: #333;
      //background: white;
      //width: 5px;
      //font-size: 11px;
      //font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
      text-align: center;
      color: #ccc;
      border-right: 1px solid #999;
      vertical-align: top;
      padding-right: 5px;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
 
    }

    /* Technique to disable line numbers from being selected and copied. 
       Checkout this post for more details http://codepen.io/danoc/pen/ByGKZv */
    [data-pseudo-content]::before,
    [data-pseudo-content--before]::before,
    [data-pseudo-content--after]::after {
      content: attr(data-pseudo-content);
    
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


            const  codePattern = /<span class="hljs-comment">(.|\n)*?<\/span>/g


            const adaptedHighlightedContent = html.replace(codePattern, data => {
                return data.replace(/\r?\n/g, () => {
                    return '\n<span class="hljs-comment">'
                })
            })
                // console.log(adaptedHighlightedContent)
                //
            const contentTable = adaptedHighlightedContent.split(/\r?\n/).map((lineContent: string, idx: number) => {
                return `<tr>
                      <td class='line-number' data-pseudo-content=${++idx}></td>
                      <td>${lineContent}</td>
                    </tr>`
            }).join('')

                return `<table class='code-table'><thead><tr><th>${lang}</th><th><ClipboardCopyWithModal contents={code}/></th></tr></thead>${contentTable}</table>`
            }
    });

    const html = marked(content);
    console.log(language)
    // console.log(html)
    return html;
}

/*
 * Transform the snippet from plain text to html markup which includes line number
 * support. This method returns an object that can be consumed by a React component.
 * @content   plain text for snippet
 * @language  the language for the snippet
 */
type Props ={
    content : string
}

function createMarkup ( {content} : Props) {
    console.log(content)
    // @ts-ignore
    const html = {__html: createHighlightedCodeBlock(content) };
    return (
        <div>
            {/*<ClipboardCopyWithModal contents={content}/>*/}
        <MarkStyle dangerouslySetInnerHTML={html}/>
        </div>
    )

}
export default createMarkup;