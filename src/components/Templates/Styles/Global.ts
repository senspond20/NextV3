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
    font-size: 1.05em;
    letter-spacing :0.5px;
    word-spacing:5px;
    line-height:1.2;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  button {
    cursor:pointer;
  }
  button:active{
    background: rgba(0,0,0,0.15);
  }
  
  h1,h2,h3,h4,h5,h6{  display: block; font-weight: bold;}
  h1 {  font-size: 2em; margin: 0.67em 0;  }
  h2 {  font-size: 1.5em; margin: 0.83em 0; }
  h3 {  font-size: 1.17em; margin: 1em 0;}
  h4 {  font-size: 1em; margin: 1.33em 0;}
  h5 {  font-size: .83em; margin: 1.67em 0;}
  h6 {  font-size: .67em; margin: 2.33em 0;}
  p {margin: 0.7em;}
  
 
  
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

  @media(max-width: 1150px){
    .headerMenu{
      //display:block;
    }
    .toc{
      grid-row: 4 / 5;
      grid-column: 1 / 4;
    }
    //.home-toc{
    //  display: none;
    //}
    .blog-main{
      grid-column: 1 / 4;
    }
    /* aside{
        grid-row: 3 / 5;
        grid-column: 1 / 4;
    } */
  }
  @media(max-width: 800px){
    //.top-hero{display: none}
    .home-card-wrap{
      grid-column: 1 / 4;
    }
    .aside_hero{
      display: none;
    }
    .blog-sidebar{
      background: #fff;
      position: fixed;
      width: 400px;
      height: 1600px;
      top:-70px;
      border-left: 1px solid red;
      right: 0;
      bottom: 0;
      opacity: 1;
      .side-sticky{
        position: relative;
      }
    }
  }
  .blog-sidebar-ative{

  }
`;

export default GlobalStyle;
