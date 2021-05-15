
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

type Props ={
    language? : string,
    value? : string,
    style? : string
}
const CodeBlock = ({ language, value , style } : Props) => {
    return (
        <SyntaxHighlighter language={language} style={style || tomorrow}>
            {value}
        </SyntaxHighlighter>
    )
}

export default CodeBlock