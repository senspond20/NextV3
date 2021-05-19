import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    overflow: auto;
    color : ${({theme}) => theme.body.fgColor};
    background : ${({theme}) => theme.body.bgColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  section{
    width:100%;
    main{
      margin : 0 auto;
      width:80%;
    }
  }

  .CodeMirror {
    max-width: 100% !important;
    /* remove label height above mirror in my case */
     /* height: 50px !important; */
     /* height: calc(100% - 32px);  */
     /* height : 100vh; */
     span {
       font-size: 1rem !important;
     }
  }
`;

export default GlobalStyle;
