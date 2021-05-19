import React, {ReactNode, useCallback, useState} from "react";
// import styledUtil from "components/Atoms/StyledUtil";
// import MessageModal from "components/Atoms/MessageModal";
import {ModalWrapper,CloseIcon,ClickWrapper,ClickIcon} from "./ClipboardCopyWithModalStyle"

type Prop ={
    contents : string
    text? : string
    message? : string
}

const ClipboardCopyWithModal = (props : Prop) =>{
    const [modal,setModel] = useState(false);
    const doCopy = useCallback(
    ()=> {
        if(modal === false){ // modal 값이 false 일때만
            if (!document.queryCommandSupported("copy")) {
                return alert("복사하기가 지원되지 않는 브라우저입니다.");
            }
            const textarea = document.createElement("textarea");
            if (textarea) {
                textarea.value =  props.contents;
                textarea.style.top = String(0);
                textarea.style.left = String(0);
                textarea.style.display = "fixed";
            }
            document.body.appendChild(textarea);
            textarea.focus();   // focus() -> 사파리 브라우저 서포팅
            textarea.select();  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setModel(true);
        }
    },[props.text]);

    return (
            <>
                {modal === true ? (
                <ModalWrapper>
                    <div className={'modal-wrapper'}>
                        <div className={'modal-item'}>
                            {/*모달창 닫기*/}
                            <div className={'modal-btn-area'} onClick={()=>setModel(false)}>
                                <CloseIcon/>
                            </div>
                            <div className={'modal-message-area'}>
                                <div className={'modal-message'}>
                                    <p>{props.message || '클립보드에 복사되었습니다'}</p>
                                    <span>원하시는 곳에 Ctl+V 로 붙여넣기 하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalWrapper> ) : null}
                <ClickWrapper onClick={() => doCopy()}>
                    <ClickIcon/>
                    <span>{props.text || 'Copy'}</span>
                    {/*<label onClick={() => doCopy()}>복사하기</label>*/}
                </ClickWrapper>
            </>
    )
}

export default ClipboardCopyWithModal;


