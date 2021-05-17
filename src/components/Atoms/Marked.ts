import marked from "marked";
import hljs from "highlight.js";

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
    highlight: function (code : string) {
        return hljs.highlightAuto(code).value;
    }
});

export default marked;
