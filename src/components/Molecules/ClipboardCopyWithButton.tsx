import React from "react";
import doCopy from "components/Atoms/DoCopy";

function ClipboardCopyWithButton(text : string) {
    return (
        <button onClick={() => doCopy(text)}>Copy</button>
    );
}
export default ClipboardCopyWithButton;