import "./cardWidget.css"
import { useContext } from "react";
import  cartContext  from "../../storage/context";

function CartWidget (props) {
    const {totalItemsEnCarro} = useContext( cartContext );
    return (
        <>
        <div  className="cartImg img-fluid mt-4">
        <img alt="foto de carrito" src="./img/Carrito.png"/>
        {totalItemsEnCarro()}
        </div>
        </>
    );
}
export default CartWidget;