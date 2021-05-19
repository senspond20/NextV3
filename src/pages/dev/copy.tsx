import React from "react";
import ClipboardCopyWithModal from "components/Modal/ClipboardCopyWithModal";

const TEXT1 = '안녕하세요 반갑습니다';
const TEXT2 = '안녕하세요 반갑습니다 어서오세요';

const handle = () =>{
    return(
        <div>
            <h1>Test - ClipboardCopyWithButton</h1>
            <ClipboardCopyWithModal contents={TEXT1}/>
            <pre>
                {TEXT1}
            </pre>
            <hr/>
            <ClipboardCopyWithModal
                text={'클립보드에 복사하기'}
                contents={TEXT2}
                message={'날 원하니 ? '}/>
            <pre>
                {TEXT2}
            </pre>
            <hr/>
        </div>

    )
}

export default handle;