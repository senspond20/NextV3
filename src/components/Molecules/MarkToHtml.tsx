import marked from "../Atoms/Marked"

/**
 * 
 * @param input 
 * @returns 
 */
 function markTohtml(input : string) {
     const html = marked(input, {sanitize: false});
    return (<div dangerouslySetInnerHTML={{__html : html}}></div>)
}

export default markTohtml;