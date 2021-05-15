import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
function TuiEditor() {
    const initiated = `\`\`\` chart
,category1,categoy2
JEN,21,23
FEB,31,17

type : column
title : sdfds
x.title : sdf
y.title : mone
y.min : 1
y.max : 40
y.suffix : $
\`\`\`

\`\`\`uml
partition 로직 {
    (*) --> "공부를 한다"
    --> ==== S1 ===
    --> "리액트를 구현"
}
partition 청중 #LightSkyBlue {
    === S1 === --> "똥"
}
\`\`\` 

\`\`\` js
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// Step 2. Import language files of highlight.js that you need
import javascript from 'highlight.js/lib/languages/javascript';
import clojure from 'highlight.js/lib/languages/clojure';

console.log(3);
\`\`\`
    `
    return (
        <Editor
            initialValue={initiated}
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            // plugins ={[chart,uml,colorSyntax,codeSyntaxHighlight.bind(hljs)]}
        />
    );
}

export default TuiEditor;