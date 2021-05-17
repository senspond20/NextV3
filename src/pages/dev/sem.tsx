import React, {useMemo, useState} from "react";

// import SimpleMDE from "react-simplemde-editor";
import dynamic from "next/dynamic";
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), {ssr: false})
import "easymde/dist/easymde.min.css";
import {KeyMap} from "codemirror";

export const ControlledUsage = () => {
    const [value, setValue] = useState("Initial value");

    const onChange = (value: string) => {
        setValue(value);
    };
    return <SimpleMdeReact value={value} onChange={onChange} />;
};
export const UsingOptions = () => {
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
export const UpdateableByHotKeys = () => {
    const extraKeys = useMemo<KeyMap>(() => {
        return {
            Up: function (cm) {
                // @ts-ignore
                cm.replaceSelection(" surprise. ");
            },
            Down: function (cm) {
                // @ts-ignore
                cm.replaceSelection(" surprise again! ");
            },
        };
    }, []);

    const [value, setValue] = useState("initial");
    const onChange = (value: string) => setValue(value);

    return (
        // @ts-ignore
        <SimpleMdeReact value={value} onChange={onChange} extraKeys={extraKeys} />
    );
};

/*
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "components/Editor/ReactMarkdown";

export const CustomPreview = () => {
    const customRendererOptions = useMemo(() => {
        return {
            previewRender() {
                return ReactDOMServer.renderToString(
                    <ReactMarkdown
                        source={text}
                        renderers={{
                            CodeBlock: CodeRenderer,
                            Code: CodeRenderer,
                        }}
                    />
                );
            },
        } //as SimpleMDE.Options;
    }, []);

    return (
        <div>
            <h4>Custom preview</h4>
            <SimpleMdeReact options={customRendererOptions} />
        </div>
    );
};*/

import type { SimpleMdeToCodemirrorEvents } from "react-simplemde-editor";

export const CustomEventListeners = () => {
    const [value, setValue] = useState("Initial value");

    const onChange = (value: string) => {
        setValue(value);
    };

    // Make sure to always `useMemo` all the `options` and `events` props to ensure best performance!
    const events = useMemo(() => {
        return {
            focus: () => console.log(value),
        } as SimpleMdeToCodemirrorEvents;
    }, []);

    return <SimpleMdeReact events={events} value={value} onChange={onChange} />;
};
export default function handle(){

    return(
        <>
            <SimpleMdeReact />
            <ControlledUsage/>
            <h3>UsingOptions</h3>
            <UsingOptions/>
            <h3>key</h3>
            <UpdateableByHotKeys/>
            {/*<CustomPreview/>*/}

            <CustomEventListeners/>
        </>

    )
}
