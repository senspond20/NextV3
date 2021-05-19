import marked from "marked";
import hljs from "highlight.js";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
// import 'highlight.js/styles/Hybrid.css'

import 'highlight.js/styles/androidstudio.css'

import doCopy from "components/Atoms/DoCopy";
import ClipboardCopyWithButton from "components/Molecules/ClipboardCopyWithModal";
// import 'highlight.js/styles/lightfair.css'
const HighlightStyle = styled.div`
  width: fit-content;
  background-color: #ffffff !important;

  .codeArea {
    width: fit-content;
    font-size: 1rem;
    padding: 5px;
    border-radius: 16px;
  }

  .codeArea .language-label {
    text-align: left;
    color: #2a3899 !important;
    background-color: #ffffff !important;
    z-index: 888;
    padding: 5px;
    font-weight: 900;
    border-bottom: 3px solid #ffffff;
    width: 100%;
    //height: 40px;
  }

  .codeArea pre {
    text-align: left;
    min-width: 290px;
    max-width: fit-content;

    margin: 0;
  }

  //@media (max-width : 760px){
  //  .codeArea pre{
  //    min-width: 290px;
  //  }
  .hljs-ln-numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-align: center;
    color: #ccc;
    border-right: 1px solid #CCC;
    vertical-align: top;
    padding-right: 5px;

    /* your custom style here */
  }

  /* for block of code */
  .hljs-ln-code {
    padding-left: 10px;
  }
`;



const CodeCoppy = (text : string) => {
    return (
        <button onClick={() => doCopy(text)}>Copy</button>
    );
}
function copy(text : string){
    doCopy(text)
}


// export default marked;

type Props ={
    input : string;
}
function MarkToHtmlRender({input} : Props) {
    const [lang,setLang] = useState<string>();
    const [code,setCode] = useState<string>();
    const renderRef = useRef<HTMLDivElement>();
    let ll;
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
        highlight : function (str: string, lang: string ) {

            // hljs.initLineNumbersOnLoad();
            const highlightedContent = hljs.highlight(lang,str, true).value
            // 첫글자만 대문자로
            // const langU = lang.charAt(0).toUpperCase() + lang.slice(1);
            console.log(lang)
            ll = lang;
            if(!lang && lang !=''){
                setLang(lang)
            }
            if(!code){
                setCode(str);
            }
            // return hljs.highlightAuto(code).value;
            const htmlStr = `<pre class="codeArea">맹구-없다구요Z<div class="language-label">${lang}<button onClick={copy}>Copy</button></div><pre class="hljs"><code class='hljs language-${lang}'>${highlightedContent}</code></pre>` + '</article';

            const resultStr = String(htmlStr).replace(/<pre class="codeArea">맹구-없다구요Z/g,`<article class ="codeArea">`);
            return resultStr;

            // if (lang && hljs.getLanguage(lang)) {
            //     // 첫글자만 대문자로
            //     const langU = lang.charAt(0).toUpperCase() + lang.slice(1);
            //     try {
            //         return (
            //             `<article class="codeArea"><h4>${langU}</h4><pre class="hljs"><code class ="${lang}">${hljs.highlight(lang, code, true).value}</code></pre></article>`
            //         );
            //     } catch (__) {}
            // }
            // return (
            //     `<article class="codeArea"><pre class="hljs"><code>${hljs.highlight(lang, code, true).value}</code></pre></article>`
            // );
        }
    });

    const html = marked(input, {sanitize: false});

    console.log(html)
    // const copy = () =>{
        // doCopy({code})
        // alert('sdfsdf')
    // }

    const costom = () =>{
        const html = marked(input, {sanitize: false});
        return(
            <div>
                <h1>{lang}</h1>
                {/*<button onClick={() => doCopy({code})}>Copy</button>*/}
                <ClipboardCopyWithButton text={'dfsdfsdfdf'}/>
                <pre><code>{code}</code></pre>
            </div>

        )
    }
    return (

        <div>

            <h1>{ll}</h1>
            {/*<button onClick={() => doCopy({code})}>Copy</button>*/}
            <ClipboardCopyWithButton text={'dfsdfsdfdf'}/>
            <pre><code>{code}</code></pre>
            <hr/>
            <HighlightStyle dangerouslySetInnerHTML={{__html: html}}/>
        </div>

    );
};

export default MarkToHtmlRender;
