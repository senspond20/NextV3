import React from "react";

type Props ={
    items : any[];
}

const ListItem = ( {items} : Props) =>{
    return(
        <ul>
            {items.map((item,idx)=>(
                <li key={idx}>{item}</li>
            ))}
        </ul>
    )
}

export default ListItem;