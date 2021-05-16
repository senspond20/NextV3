import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 1080px){
    .sensingEditor .output-html{ display: none !important; }
    .sensingEditor .editor-toggle-btn{ display: none; !important;}
  }
  .sensingEditor .flex-c{display: flex; justify-content: center; align-items: center;}
  .sensingEditor .styling input{background-color: #fff; border-radius: 4px; border: 1px solid #666; cursor: pointer;}
  .sensingEditor .styling input:hover{background-color: #eee;}

  .sensingEditor .editor {background-color:#fff; border: 10px solid #f0f0f0; border-radius: 5px;}
  .sensingEditor .editor .item{ white-space: pre-wrap; overflow-y: scroll;  width: 100%; height: 70vh; padding: 20px 20px; outline: none;}
  .sensingEditor .editor .input-markdown { background-color: #333; color:#fff; font-size: 1rem;}
  .sensingEditor .editor-toggle-btn {float: right; cursor: pointer; background-color: #333; color: #fff; padding: 7px; border-radius: 10px;}
  .sensingEditor .editor .output-html {  transition: 0.2s}
  .sensingEditor .editor .output-html-hide{ width: 0;  opacity: 0; clear: both; content: '';display: none}
  .sensingEditor .editor .output-html-hide:after{content: ''; dispaly: table; clear: both; display: none}
  .sensingEditor .btn {display: flex; justify-content: center; align-items: center; width: 15vw; border: none; rgb(160, 150, 156); color:#333; height: 40px; border-radius: 10px; cursor: pointer; outline: none}
  .sensingEditor .btn:focus {outline: none;}
  .sensingEditor .btn:hover { background-color: rgb(216, 210, 214);}
`
export default function SensingEditor(){

    const [toggle, setToggle] = useState<boolean>(false);
    const ToggleRef = useRef<HTMLDivElement>(null);

    const goSubmit=(e: { preventDefault: () => void; } )=>{
        e.preventDefault();
        alert('dfd')
    }

    useEffect(()=>{
        const getCurrent = ToggleRef.current;
        toggle ? getCurrent?.classList.add('output-html-hide')
               :  getCurrent?.classList.remove('output-html-hide');
    },[toggle])

    useEffect(()=>{
        const body = document.querySelector('body');
        body?.addEventListener('keypress',handleKeyPress);
    },[])

    /**
     * 키보드 이벤트
     * @param e : KeyboardEvent
     */
    const handleKeyPress = (e : KeyboardEvent) => {
        // if(e.charCode === 13) { //  deprecated
        //   this.handleClick();
        // }

        if (e.key === "Enter") {
            console.log('엔터')
        }
    };
    return(
        <Container>
            {/* form  */}
            <form name="sensingFrm" className="sensingEditor" method={'post'}>
                <div className="flex-c"><h1>sensingEditor</h1></div>

                {/* 상단 버튼 영역 */}
                <div className="styling">
                    <input type={'button'} value={'ee'}/>
                    <input type={'button'} value={'ee'}/>
                    <input type={'button'} value={'ee'}/>
                    <input type={'button'} value={'ee'}/>
                </div>
                {/* 에디터 영역 (좌 : markdown , 우 : html ) */}
                <div className="editor flex-c">
                    <textarea className="item input-markdown"></textarea>
                    <div className="item output-html" ref={ToggleRef}></div>
                </div>
                <div className={"toggle-wrap"}>
                    <input type={'button'} className={'editor-toggle-btn'} onClick={() => setToggle(!toggle)} value={'Toggle'}/>
                </div>

                {/* 전송/취소 버튼 영역 */}
                <div className="btnArea flex-c">
                    <button type={'submit'} className="btn submit" onClick={goSubmit}>Sumbit</button>
                    <button type={'reset'} className="btn cancel">Cancel</button>
                </div>
            </form>
        </Container>
    )

}