import React from "react";
import Item from "../Item/Item";

function ItemlistContainer (props){
    return (
    <>
    <Item name = "Producto 1" price="16000" detail="lorem ipsu" img="/img/celular-A02s.jpg" />
    <Item name = "producto 2" price="12000" detail="lorem ipsu" img="/img/celular A10.jpg" />
    </>
    );
}

export default ItemlistContainer;