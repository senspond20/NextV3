import HighlightJS from 'highlight.js'
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css"
import mark from "../../pages/dev/mark";
import styled from "styled-components";

const MarkStyle = styled.div`
  pre,code{
    margin: 0;padding: 0;
  }
  
  code{
    //padding-left: 5px;
    //width: fit-content;
  }
  .hljs-namespace{
    //background: #0055aa;
    //width: fit-content;
    color : red;
    padding: 1px 10px;
    margin-bottom: 10px;
    //border-radius: 5px;
    display: block;
    background: #cccccc;
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
            language = lang;
            const ttt = `<div class="hljs-namespace">${lang}</div>${html}`
            return ttt;
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
        <MarkStyle dangerouslySetInnerHTML={html}/>
    )

}
export default createMarkup;