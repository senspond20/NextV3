
import React from "react"
import { Prism  } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

type Props ={
    language? : string,
    value? : string,
    style? : string
}
const PrismCodeBlock = ({ language, value , style } : Props) => {
    return (
        <Prism language={language} style={style || tomorrow}>
            {value}
        </Prism>
    )
}

export default PrismCodeBlock