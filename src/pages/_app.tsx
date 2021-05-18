import {AppProps} from "next/app";
import React from "react";
import '@public/styles/globals.css'
import '@public/styles/codemirror.css'
import styled from "styled-components";
// import 'codemirror/lib/codemirror.css';
// import {Helmet} from "react-helmet";

const HighLight = styled.div`
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
`

function MyApp({ Component, pageProps }: AppProps) {
  return <HighLight>
    <Component {...pageProps} />
    {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>*/}
    {/*<script>hljs.initHighlightingOnLoad();</script>*/}
    {/*/!*<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/bash.min.js"></script>*!/*/}
    {/*<script src="//cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>*/}
    {/*<script>hljs.initLineNumbersOnLoad();</script>*/}
    {/*<script>*/}
    {/*  var list = document.querySelectorAll('code.hljs');*/}
    {/*  console.log(list);*/}
    {/*</script>*/}
  </HighLight>
}

export default MyApp
