import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

// @ts-ignore
const PrismCodeView = ({node, inline, className, children, ...props}) =>{
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
export default PrismCodeView;