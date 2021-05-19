import CodeBlock from "components/Atoms/PrismCodeBlock";
import React from "react";
// import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeViewDiv(){
    return(
        <CodeBlock language={'js'} value={`console.log(3)`} style={''}/>
    )
}
export default CodeViewDiv;