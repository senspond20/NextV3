import React from "react";
import ReactMarkdown from "components/Editor/ReactMarkdown";
import styled from "styled-components";
import PrismCodeView from "components/Editor/PrismCodeView";
import MarkdownCode from "components/Editor/PrismCodeView";
import CodeBlock from "components/Editor/ReactMarkdown";

const content = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |
| 3| 4 |

~~~js
function sum(a,b){
    return a+b;
}
console.log(5,7);
~~~

&lt;div class="note">ggg</div&gt;
`
const Container = styled.div`
  table{
    border: 1px solid red;
  }
`
const CodeWithCodemirror = dynamic(import('components/Editor/CodeMirror'), {ssr: false})
const rend = (content : string) =>{
    return (<ReactMarkdown children={content}/>);
}
import 'codemirror/theme/ayu-dark.css'
import dynamic from "next/dynamic";
const MarkDownDev = () =>{

    return(
        <Container>

            <CodeWithCodemirror>
                <ReactMarkdown children={content}/>
            </CodeWithCodemirror>
        </Container>
    )
}
export default MarkDownDev;