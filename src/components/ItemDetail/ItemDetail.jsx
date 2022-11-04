import React from "react"
import "./itemDetail.css"

function ItemDetail (props){
return(
    <div className="card-detail">
        <div className="card-detail_img">
          <img src={props.productDetail.thumbnail} alt="Product img" />
        </div>
        <div className="card-detail_detail">
          <h2>{props.productDetail.title}</h2>
          <p>{props.productDetail.description}</p>
          <h4 className="priceTag">$ {props.productDetail.price}</h4>
        </div>
    </div>
  )}
 export default ItemDetail ;