import React, {EventHandler, MouseEventHandler, useEffect, useRef, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 1080px){
    .sensingEditor .outputHtml{ display: none !important; }
    .sensingEditor .toggle{ display: none;}
  }
  .sensingEditor .flex-c{display: flex; justify-content: center; align-items: center;}
  .sensingEditor .styling input{background-color: #fff; border-radius: 4px; border: 1px solid #666; cursor: pointer;}
  .sensingEditor .styling input:hover{background-color: #eee;}
  .sensingEditor .editor {background-color:#fff; border: 10px solid #f0f0f0; border-radius: 5px;}
  .sensingEditor .editor .item{ white-space: pre-wrap; overflow-y: scroll; float: left; width: 100vw; height: 70vh; padding: 20px 20px; outline: none; }
  /* .sensingEditor .editor .textArea {  } */
  .sensingEditor .toggle {float: right; cursor: pointer; background-color: #333; color: #fff; padding: 7px; border-radius: 10px;}
  .sensingEditor .editor .outputHtml { background-color: #333; color:#fff;}
  .sensingEditor .btn {display: flex; justify-content: center; align-items: center; width: 15vw; background-color: rgb(160, 150, 156); color:#fff; height: 40px; border-radius: 10px; cursor: pointer;}
  .sensingEditor .btn:hover { background-color: rgb(216, 210, 214);}
`
interface KonvaTextEventTarget extends EventTarget {
    index: number
}
interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
    target: KonvaTextEventTarget
}

function DivEditor(){
    const [input, setInput] = useState<string>();
    const [command, setCommand] = useState<any>();
    // @ts-ignore
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        const origin = command;
        console.log(command)
        setCommand(null);
        document.execCommand(origin);
    },[command])

    useEffect(()=>{
        const body = document.querySelector('body');
        body?.addEventListener('keypress',handleKeyPress);
    },[])

    const handleKeyPress = (e : KeyboardEvent) => {
        // if(e.charCode === 13) { //  deprecated
        //   this.handleClick();
        // }
        console.log(e.key)
    if(e.key ==='74'){
        console.log('ctrl+ 1')
    }
    if(    e.key === '17'){
        console.log('shfit')
    }
        if (e.key === '13') {
            console.log('gggggg')
        }
    };
    return(
        <Container>
            <form name="sensingFrm" className="sensingEditor">
                <div className="flex-c"><h1>sensingEditor</h1></div>
                <div className="styling">
                    <input type="button" value="clear" onClick={()=> setCommand(null)}/>
                    <input type="button" value="B" onClick={()=> setCommand('bold')}/>
                    <input type="button" value="Italic" onClick={()=> setCommand('Italic')}/>

                    <input type="button" value="Italic" onClick={()=> setCommand('Italic')}/>

                    <input type="button" value="Underline" onClick={()=>document.execCommand('Underline')}/>
                    {/*<input type="button" value="StrikeThrough" onClick="exc('StrikeThrough')"/>*/}
                    {/*<input type="button" value="왼쪽 정렬" onClick="exc('justifyleft')"/>*/}
                    {/*<input type="button" value="가운데 정렬" onClick="exc('justifycenter')"/>*/}
                    {/*<input type="button" value="오른쪽 정렬" onClick="exc('justifyright')"/>*/}
                </div>
                <div className="editor flex-c">
                    <div className="item textArea" contentEditable="true"></div>
                    <div className="item outputHtml"></div>
                </div>
                <div className="toggle">Toggle</div>
                <div className="btnArea flex-c">
                    <button className="btn submit">Sumbit</button>
                    <button className="btn cancel">Cancel</button>
                </div>

            </form>
        </Container>
    )
}
export default DivEditor;
