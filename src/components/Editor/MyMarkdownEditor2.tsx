import React from "react";
import marked from 'marked'
import highs from 'highlight.js';
import styled from "styled-components";

const Container = styled.div`
  body {
    padding: 20px;
    background-color: #ccc;
  }
  
    .row{
      margin: 0 auto;

      #input{
        float: left;

      }


      #inputText{
        max-width: 100%;
        height: 400px;
      }
    }
    
    h1{
      padding: 20px;
      text-align: center;
    }

    
    #outputText{
      max-width: 100%;
      height: 400px;
      font-size: 10px;
    }
`

class MyMarkdownEditor2 extends React.Component{
    constructor() {
        // @ts-ignore
        super();
        this.state ={
            content : '### Type Markdown Here'
        }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {

    }
    handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        this.state.content = event.target.value
    }
    rawMarkup() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return highs.highlightAuto(code).value
            }
        })

        // @ts-ignore
        const rawMarkup = marked(this.state.content, {sanitize: true})
        return {
            __html: rawMarkup
        }
    }
    render() {
        // @ts-ignore
        const {content} = this.props;
        return (
            <Container className="container">
                <h1>Markdown Parser</h1>
                <div className="row">
                    <div className="form-group col-md-6" id="input">
                        <label>Markdown</label>
                        <textarea className="form-control" rows="5" id="inputText" defaultValue={this.state.content} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group col-md-6" id="output">
                        <label>Output</label>
                        <div id="outputText" dangerouslySetInnerHTML={this.rawMarkup()}></div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default MyMarkdownEditor2;

