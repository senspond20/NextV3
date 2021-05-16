import React, { Component } from 'react'
import {IUnControlledCodeMirror, UnControlled as CodeMirror} from 'react-codemirror2'
// import CodeMirror, { IReactCodemirror } from '@uiw/react-codemirror';
// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';


// import 'codemirror/lib/codemirror.css'
// require('codemirror/lib/codemirror.css');
// require('codemirror/theme/material.css');
// require('codemirror/theme/monokai.css');
// import 'codemirror/theme/default.css'

// import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/monokai.css';

import 'codemirror/keymap/sublime';
const theme = 'monokai'; // material

const DEFAULT_JSX_OPTIONS = {
    theme: "monokai",
    autoCloseBrackets: true,
    cursorScrollMargin: 48,
    mode: "jsx",
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    styleActiveLine: true,
    viewportMargin: 99
};

import 'codemirror/mode/javascript/javascript'

type Props = {
    value? : string,
    rest? : IUnControlledCodeMirror
}
const CodeView = (props : Props) => {
    return(
        <div>
            <CodeMirror value={props.value}
                options={{
                    theme: 'ayu-dark',
                    mode: 'javascript',
                    tabSize: 3,
                    keyMap: 'sublime',
                    lineNumbers : true,
                    autofocus : true
                }}
                onChange={(editor, data, value) => {
                }}
                {...props.rest}/>
        </div>
    )
}

export default CodeView;