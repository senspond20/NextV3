import React, {useEffect, useState} from "react";
import ReactMarkdown from "components/ReactMarkdown";
import styled from "styled-components";
import PrismCodeView from "components/PrismCodeView";
import MarkdownCode from "components/PrismCodeView";
import CodeBlock from "components/ReactMarkdown";

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
const CodeWithCodemirror = dynamic(import('components/CodeMirror'), {ssr: false})
const rend = (content : string) =>{
    return (<ReactMarkdown children={content}/>);
}
import 'codemirror/theme/ayu-dark.css'
import dynamic from "next/dynamic";
const MarkDownDev = () =>{
    const [html,setHtml] = useState();

    useEffect(()=>{
        // @ts-ignore
        return setHtml(()=>{
            return (
                <ReactMarkdown children={content}/>
            )
        });
    },[])
    console.log(html)

    return(
        <Container>

            <CodeWithCodemirror rest={html}>
                {/*<ReactMarkdown children={content}/>*/}
            </CodeWithCodemirror>
        </Container>
    )
}
export default MarkDownDev;