import "./cardWidget.css"
import { useContext } from "react";
import  cartContext  from "../../storage/context";
import { Link } from "react-router-dom";

function CartWidget (props) {
    const {totalItemsEnCarro} = useContext( cartContext );
    return (
        <>
        <Link to="/cart">
        <div  className="cartImg img-fluid mt-4">
        <img alt="foto de carrito" src="./img/Carrito.png"/>
        </div>
        </Link>
        {(totalItemsEnCarro()>0)?
            <small>{totalItemsEnCarro()}</small>
            :
            <></>
        }
        </>
    );
}
export default CartWidget;