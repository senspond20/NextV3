import React, {useMemo, useState} from "react";
import ReactDOMServer from 'react-dom/server';
import dynamic from "next/dynamic";
import SimpleMDE from "easymde";

// const SimpleMDE = dynamic( import('easymde'), {ssr:false})
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), {ssr: false})


import "easymde/dist/easymde.min.css";
// import MarkTohtml from "components/Molecules/MarkToHtml";

import ReactMarkdown from "components/ReactMarkdown";
// import {KeyMap} from "codemirror";

// const customRendererOptions = useMemo(() => {
//     return {
//         previewRender() {
         
//         },
//     } //as SimpleMDE.Options;
// }, []);
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

\`\`\`java
dsgdsgdsgdgds
\`\`\`

|1|2|3|
|--|--|--|
|412|24|34|
`;

export default function UsingOptions(){
    const [value, setValue] = useState("```js " +
        "console.log(3)```");

    const onChange = (value: string) => {
        setValue(value);
    };
    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        };
    }, []);

    // const customRendererOptions = useMemo(() => {
    //     return {
    //         previewRender() {
    //            return ReactDOMServer.renderToString(<MarkToHtmlRender input={MARKDOWN_TEXT}/>)
    //
    //         },
    //     } as SimpleMDE.Options;
    // }, []);


    return (
        <div>
            {/*<button onClick={customRendererOptions}>클릭</button>*/}
            <SimpleMdeReact
                options={autofocusNoSpellcheckerOptions}
                value={value}
                onChange={onChange}
            />
        </div>

    );
};


