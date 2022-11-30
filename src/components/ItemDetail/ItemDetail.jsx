import React, { useState, useContext } from "react"
import { Link } from "react-router-dom";
import "./itemDetail.css"
import CartCounter from "../CartCounter/CartCounter";
import cartContext from "../../storage/context";

function ItemDetail (props){
  const [existe, setExiste] = useState(false);
  const { agregarAlCarro } = useContext(cartContext)
  
  function paraAgregarAlCarro(cant){
  const itemParaCarro={
  ...props,
  cant}
  agregarAlCarro(itemParaCarro)

  setExiste(true)
  }
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
        {!existe? (
        <CartCounter
          paraAgregarAlCarro={paraAgregarAlCarro}
          stock={props.productDetail.stock}
        />
      ) : (
        <div>
          
          <Link to="/cart"> <button> Ir al Carrito      </button> </Link>
          <Link t="/">      <button> Volver al catálogo </button> </Link>
          <button>Quitar del carrito</button>
        </div>
      )}
    </div>
  )}
 export default ItemDetail ;