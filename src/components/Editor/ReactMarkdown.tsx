import React from "react";
import ReactMarkdown,{CoreOptions} from "react-markdown";
import gfm from 'remark-gfm'
// import CodeBlock from "components/Editor/CodeBlock";
import PrismCodeView from "components/Editor/PrismCodeView";

import rehypeRaw from 'rehype-raw'
import CodeBlock from "components/Editor/CodeBlock";
// import remarkMath from 'remark-math' 수학
// import rehypeKatex from 'rehype-katex'
// renderers={{ code: CodeBlock }}>
function RenderedMarkdown({children} : CoreOptions){
    return(
        <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
           >
            {children}
        </ReactMarkdown>
    )
}
export default RenderedMarkdown;
