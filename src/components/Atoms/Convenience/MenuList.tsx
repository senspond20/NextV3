import React from "react";
import styled from "styled-components";
import MenuItem,{Item} from "./MenuItem";

const MenuList = styled.ul`
`;

type Props = {
    className? : string
    list : Item[]
}
const handle = (props : Props) =>{
    // console.log(props.list)
    return(

        <MenuList className={props.className}>
            {props.list.map((e, idx) =>{
                return (<MenuItem key ={idx} className={e.className} name={e.name} link={e.link}/>)
            })}
        </MenuList>
    )
}

export default handle;