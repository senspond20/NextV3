import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism";

import React from "react";
import ReactMarkdown, {CoreOptions} from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {TransformOptions} from "react-markdown/src/ast-to-react";

// @ts-ignore
const PrismCodeView = ({node, inline, className, children, ...props} : TransformOptions)  =>{
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
        <SyntaxHighlighter style={dark}
                           language={match[1]}
                           PreTag="div"
                           children={String(children).replace(/\n$/, '')}
                           {...props} />
    ) : (
        <code className={className} {...props} />
    )
}
function MarkdownCode({children} : CoreOptions){
    return(
        <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            // components={PrismCodeView}
            children={children}
        />
    )
}

export default MarkdownCode;

