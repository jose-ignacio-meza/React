import React from "react";
import "./item.css"
import button from "../Button/Button"
import { Link } from "react-router-dom";

function Item(props){

let urlDetail= `/detail/${props.product.id}`;

return(   
    <div  className="card">
        <div className="card-img">
           <img alt="product img" src={props.product.thumbnail}/>
        </div>
        <div className="card-detail">
           <h2>{props.product.title}</h2>
           <p>{props.product.description}</p>
           <h4 className="card-price">$ {props.product.price}</h4> 
        </div>  
        <Link to={urlDetail}>
            <button color="#fff"> ver mas </button>    
        </Link>   
    </div>
    );
}
export default Item;