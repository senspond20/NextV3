
import React from "react";
import styled from "styled-components";
import Icon from './Icon'

const Svg = styled(Icon)` 
        opacity: 0.78;
        font-size: 144px;
        stroke-miterlimit: 10;
        stroke-width: 0.5px;
        //font-family: SegoePrint, Segoe Print;
        letter-spacing: 0.05em;
        stroke-width: 2;
        cursor: pointer;  
        animation: textAnimation 5s infinite alternate;
   
    @keyframes textAnimation {
        0% {
            fill: rgba(72,138,20,0); stroke: rgb(160, 54, 133);
            stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
        }
        50% {fill: rgba(72,138,20,0); stroke: rgb(160, 54, 107); }
        70% {fill: rgba(72,138,20,0); stroke: rgb(160, 54, 107); stroke-width: 20; }
        100% {
            fill: rgb(79, 65, 206); stroke: rgba(54,95,160,0);
            stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
        }
    }
`;

// @ts-ignore
type Props = {
    text : string
}
const TextLogo  = ({text} : Props) => {
    return (
        <Svg viewBox="0 0 2330 450" className= "mylogo">
            <text x="50%" y="55%" textAnchor="middle">{text}</text>
        </Svg>
    )
};

export default TextLogo;