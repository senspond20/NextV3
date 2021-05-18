import React, {useEffect, useState} from "react";
import doCopy from "components/Atoms/DoCopy";

type Props ={
    text? : string
}
function ClipboardCopyWithButton({text} : Props) {
    const [click, setCLick] = useState(false);

    useEffect(()=>{
        alert('sdfds')
        // 흐름 1.
        // if (!document.queryCommandSupported("copy")) {
        //     return alert("복사하기가 지원되지 않는 브라우저입니다.");
        // }
        // 흐름 2.
        // const textarea = document.createElement("textarea");
        // if (typeof text === "string") {
        //     textarea.value = text;
        //     textarea.style.top = String(0);
        //     textarea.style.left = String(0);
        //     textarea.style.display = "fixed";
        //     // 흐름 3.
        //     document.body.appendChild(textarea);
        //     // focus() -> 사파리 브라우저 서포팅
        //     textarea.focus();
        //     // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        //     textarea.select();
        //     // 흐름 4.
        //     document.execCommand("copy");
        //     // 흐름 5.
        //     document.body.removeChild(textarea);
        //     alert("클립보드에 복사되었습니다");
        // }
    },[click])


    return (
        <button onClick={()=> setCLick(true)}>Copy</button>
    );
}
export default ClipboardCopyWithButton;