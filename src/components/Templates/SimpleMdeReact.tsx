import React, {useMemo, useState} from "react";

import dynamic from "next/dynamic";
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), {ssr: false})
import "easymde/dist/easymde.min.css";
// import {KeyMap} from "codemirror";

// const customRendererOptions = useMemo(() => {
//     return {
//         previewRender() {
         
//         },
//     } //as SimpleMDE.Options;
// }, []);


export default function UsingOptions(){
    const [value, setValue] = useState("Initial");

    const onChange = (value: string) => {
        setValue(value);
    };
    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        };
    }, []);
    return (
        <SimpleMdeReact
            options={autofocusNoSpellcheckerOptions}
            value={value}
            onChange={onChange}
        />
    );
};


