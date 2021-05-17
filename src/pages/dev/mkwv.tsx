import React from "react";
import MarkdownCode from "components/Editor/PrismCodeView";

const handle = () =>{

    const MARKDOWN_TEXT = `React + marked + highlight.js

**Code Sample:**
\`\`\`javascript
import marked from "marked";

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code, ["html", "javascript"])
      .value;
  }
});
\`\`\`
`;
    // @ts-ignore
    return(
        <MarkdownCode children={MARKDOWN_TEXT}/>
    )
}
export default handle;