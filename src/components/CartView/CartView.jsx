import React, {useContext} from "react";
import cartContext from "../../storage/context"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { crerateBuyOrderFirestore } from "../../database/firebase";
import swal from'sweetalert2';
import OrdenDeCompra from "./OrdenDeCompra";

function CartView (){
  const {carro,totalPrecioCarro,eliminarItemCarro,vaciarCarro} = useContext(cartContext)
  const navigate = useNavigate();
  if (carro.length === 0)
  return <>
          <h3>Carrito Vacio</h3>
          <Link to="/"> Ir al Catalogo </Link>
          </>

  function crearOrdenDeCompra(datosUsuario){
    console.log(datosUsuario);
    const ordenDeCompra = {
      comprador: datosUsuario,
      productos:carro,
      total: totalPrecioCarro(),
      fecha: new Date(),
    }

    crerateBuyOrderFirestore(ordenDeCompra).then((respuesta)=>{
      vaciarCarro();
      swal.fire({
        title:'Compra exitosa',
        text:  `Tu compra tiene el id : ${respuesta}`,
        icon:  'success',
      });
      navigate(`/checkout/${respuesta}`);
    });
    
  };  
  
  return(
        <div>
            <h2>Su carrito esta Listo</h2>
            <div>
              {carro.map((itemCarro) =>(  
                <div key={itemCarro.productDetail.id}>
                  <img src={itemCarro.productDetail.thumbnail} alt={itemCarro.productDetail.title}/>
                  <h3> {itemCarro.productDetail.title} </h3>
                  <h4> ${itemCarro.productDetail.price } </h4>
                  <h5>Total de items: {itemCarro.cant} </h5>
                  <button onClick={() => eliminarItemCarro(itemCarro.productDetail.id)}>
                     Eliminar item </button>
                </div>
              ))
              }
              <button onClick={()=> vaciarCarro()}>Vaciar Carrito </button>
              <h3> Total a pagar ${totalPrecioCarro()}</h3>
              <OrdenDeCompra onSubmit={crearOrdenDeCompra} />
            </div>
            
        </div>
  );
}
export default CartView;