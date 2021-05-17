import marked from "../Atoms/Marked"

/**
 * 
 * @param input 
 * @returns 
 */
 function markTohtml(input : string) {
    return marked(input, {sanitize: false});
}

export default markTohtml;