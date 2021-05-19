import hljs from "highlight.js";
const md = require("markdown-it")({
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: true,        //자동으로 텍스트 Url를 링크로 만들건지 말건지
    typographer: true,
    quotes: "“”‘’",
    highlight: function (str : string, lang : string) {
        if (lang && hljs.getLanguage(lang)) {
            const langU = lang.charAt(0).toUpperCase() + lang.slice(1);
            try {
                return `<pre class="hljs">맹구-없다구요Z<h4>${langU}</h4><pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre></article>`;
            } catch (__) {}
        }
        return `<pre class="hljs">맹구-없다구요Z<h4>""</h4><pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre></article>`
    }
});
//<pre class="hljs">맹구-없다구요Z<h4>${langU}</h4><pre class="hljs"><code>
//${hljs.highlight(lang, str, true).value}</code></pre></article>

module.exports.mdToHtml =( mdStr : string) =>{
    // 첫번째 --- ~ --- (해더)를 제외한 바디부분만 추출
    // (/([\s\S]+?)(\-{3})/g) 로 사용하면 안된다. --- ~ --- 를 다 없애기 떄문
    const body = mdStr.replace(/([\s\S]+?)(\-{3})/,"");
    const htmlStr = md.render(body);
    // <pre class="hljs">맹구-없다구요Z 를 <article class ="codeArea"> 로 교체
    const resultStr = String(htmlStr).replace(/<pre class="hljs">맹구-없다구요Z/g,
        `<article class ="codeArea">`);
    return resultStr;
}