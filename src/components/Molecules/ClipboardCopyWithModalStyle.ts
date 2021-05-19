import styled from "styled-components";
import {HiOutlineClipboardCopy} from "react-icons/hi";
import {AiOutlineCloseCircle} from "react-icons/ai";

const nonSelect = {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
}

const ModalWrapper = styled.div`

  .modal-wrapper {
    background: rgba(0, 0, 0, 0.16);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    ${nonSelect};
  }

  .modal-item {
    transition: 1s;
    background: #fefdfe;
    border-radius: 10px;
    //margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    box-shadow: 12px 12px 2px 1px rgba(18, 71, 190, 0.4);
    //box-shadow: 12px 12px 2px 1px rgba(23, 158, 229, 0.4);
    //box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    width: 320px;
    height: 110px;
    //min-width: 100px;
    text-align: center;
    display: block;
  }

  .modal-btn-area {
    float: right;
  }

  .modal-message-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;

    .modal-message {
      width: 300px;
      margin-top: 15px;
      height: 60px;
    }

    p {
      font-size: 16px;
      padding-bottom: 3px;
      border-bottom: 1px solid #eee;
    }

    span {
      font-size: 12px;
      color: rgba(23, 158, 229, 0.8);
    }
  }
`

// const ClickWrapper = styledUtil<Prop>()(styled.div)`
const ClickWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  cursor: pointer;
  ${nonSelect};
  :hover{
    color: ${(props : any) => props.hoverColor || '#0070f3'};
  }
`
const ClickIcon = styled(HiOutlineClipboardCopy)`
  font-size: 20px;
`
const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 35px;
  color: rgba(23, 158, 229, 0.4);

  :hover {
    color: rgba(23, 158, 229, 0.8);
    //color: rgba(138, 15, 223, 0.8);
  }
`;

export {
    CloseIcon,
    ClickIcon,
    ClickWrapper,
    ModalWrapper
}