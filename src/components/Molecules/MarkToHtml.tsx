import marked from "./MarkToHtmlRender"
import styled from "styled-components";
import React from "react";
// import 'highlight.js/styles/dark.css';
// import 'highlight.js/styles/Hybrid.css'
// import 'highlight.js/styles/lightfair.css'
const HighlightStyle = styled.div`
  /* Line Number CSS */
  /* for block of numbers */
  .hljs-ln-numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-align: center;
    color: #ccc;
    border-right: 1px solid #CCC;
    vertical-align: top;
    padding-right: 5px;

    /* your custom style here */
  }

  /* for block of code */
  .hljs-ln-code {
    padding-left: 10px;
  }
`;
/**
 * 
 * @param input 
 * @returns 
 */
type Props = {
    input : string;
}
 function MarkToHtmlRender({input} : Props) {
     const html = marked(input, {sanitize: false});

    return (
     <>

         <HighlightStyle dangerouslySetInnerHTML={{__html: html}}/>
     </>
    )
}

export default MarkToHtmlRender;