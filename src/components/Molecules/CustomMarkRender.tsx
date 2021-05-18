import HighlightJS from 'highlight.js'
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css"
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

function createHighlightedCodeBlock (content : string) {
    const html = marked(content, {sanitize: false});


    // console.log(html)
    // let lineNumber = 0
    // const highlightedContent = HighlightJS.highlightAuto(html).value
    // console.log(highlightedContent)

    const  codePattern = /<code class="hljs language-js">(.|\n)*?<\/span>/g

    const   adaptedHighlightedContent =  html.replace(codePattern,'');

    // const adaptedHighlightedContent = html.replace(codePattern, data => {
    //     return data.replace(/\r?\n/g, () => {
    //         return '\n<span class="hljs-comment">'
    //     })
    // })
    // console.log(adaptedHighlightedContent)
    //
    // const contentTable = adaptedHighlightedContent.split(/\r?\n/).map((lineContent: string, idx: number) => {
    //     return `<tr>
    //           <td class='line-number' data-pseudo-content=${++idx}></td>
    //           <td>${lineContent}</td>
    //         </tr>`
    // }).join('')

    return `<table class='code-table'>${adaptedHighlightedContent}</table>`
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
        <div dangerouslySetInnerHTML={html}/>
    )

}
export default createMarkup;