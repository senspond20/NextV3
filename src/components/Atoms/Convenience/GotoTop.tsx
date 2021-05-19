import React from "react";
import styled from "styled-components";
import {Common} from "components/Templates";

type TopBarProp ={
    link : string, name : string
}
const TopBtn = styled.div`

  position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background-color: ${Common.palette.BLUE[8]}; color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;
`;
const handle =() =>{
    /**
     * 최상단으로 이동
     */
    const goToTop = () =>{
        // 바로
        window.scrollTo(0, 0)
        // 부드럽게
        window.scroll({
            behavior:'smooth',
            top : 0,
            left : 0
        })
    }
    return(

            <TopBtn onClick={goToTop}>Top</TopBtn>

    )
}
export default handle;