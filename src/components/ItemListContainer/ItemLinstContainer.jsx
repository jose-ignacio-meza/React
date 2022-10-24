import React from "react";
import Item from "../Item/Item";

function ItemlistContainer (props){
    return (
    <>
    <h3 className="m-3">{props.children}</h3>
    </>
    );
}

export default ItemlistContainer;