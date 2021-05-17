import React from "react";
import { ReactNode } from "react-markdown";
import styled from "styled-components";

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
`;

type Props ={
    leftChild : ReactNode
    rightChild : ReactNode
}

export default function LeftAndRight(){
    return(
        <Wrapper>
            <article className={''}>


            </article>
            <article className={''}>


            </article>
        </Wrapper>
    )
}