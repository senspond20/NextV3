import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {ImCool} from "react-icons/im";

const ModalWrapper = styled.div`
  .modal-wrapper{
    background: rgba(0,0,0,0.16);
    transition: 1s;
    position: absolute;
    left: 0; right: 0; bottom: 0; top: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
 
  //opacity: 0;
  //display: none;
  .modal-item{
    background: #fefdfe;
    border-radius: 10px;
    //margin: 0 auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-80%);
    box-shadow: 12px 12px 2px 1px rgba(23, 158, 229, 0.4);
    //box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    width: 320px;
    height: 110px;
    //min-width: 100px;
    text-align: center;
    display: block;
    .modal-btn-area{
      float: right;
    }
    .modal-message-area{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 40px;
      .modal-message{
        width: 300px;
        margin-top: 15px;
        height: 60px;
      }
      p{font-size: 16px; padding-bottom:3px; border-bottom: 1px solid #eee;}
      span{font-size: 12px; color: rgba(23, 158, 229, 0.8);}
    }
  }
  //input{ display: none; }
  //input:not(:checked) ~div{
  //  display: block;
  //}
  //input:checked ~ div{
  //  display: none;
  //}
  
`;
const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 35px;
  color: rgba(23, 158, 229, 0.4);

  :hover {
    color: rgba(23, 158, 229, 0.8);
    //color: rgba(138, 15, 223, 0.8);
  }
`;

type Props ={
    message? : string
    isOpen? : boolean
}
function MessageModal({message, isOpen} : Props){
    const [open, setOpen] = useState(true);

    return(
        <>
            {open && isOpen ?
                <ModalWrapper>
                    <input id ={'is-open-modal'} type={'checkbox'} />
                    <div className={'modal-wrapper'}>
                        <div className={'modal-item'}>
                            <div className={'modal-btn-area'} onClick={()=>setOpen(false)}>
                                <label htmlFor={'is-open-modal'}><CloseIcon/></label>
                            </div>
                            <div className={'modal-message-area'}>
                                <div className={'modal-message'}>
                                    <p>{message || '클립보드에 복사되었습니다'}</p>
                                    <span>원하시는 곳에 Ctl+V 로 붙여넣기 하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalWrapper>
                : null
            }
        </>


    )
}

export default MessageModal;

