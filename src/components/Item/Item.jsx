import React from "react";
import "./item.css"

function Item(props){
    return(
    <div  className="card">
        <div className="card-img">
           <img alt="product img" scr={props.img}></img>
        </div>
        <div className="card-detail">
           <h2>{props.name}</h2>
           <p>{props.detail}</p>
           <h4 className="card-price">$ {props.price}</h4> 
        </div>     
    </div>
    );
}
export default Item;