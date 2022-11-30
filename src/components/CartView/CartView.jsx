import React, {useContext} from "react";
import cartContext from "../../storage/context"


function CartView (){
    const {carro} = useContext(cartContext)
    console.log(carro)
  return(
        <div>
            <h1>Este es el contenido del carro</h1>
            {carro.map((itemCarro) =>(
            <div>
            <h3> {itemCarro.productDetail.title} </h3>
            <h4> {itemCarro.productDetail.price } </h4>
            <h5> {itemCarro.cant} </h5>
            </div>
            ))
            }
        </div>
  );
}
export default CartView;