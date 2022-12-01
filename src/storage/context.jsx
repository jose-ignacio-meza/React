import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext();

export function CartContextProvider (props){
    const [carro, setCarro]=useState([])

    function agregarAlCarro(itemParaCarro){
        let itemBuscado = carro.find((itemActual)=> itemActual.productDetail.id === itemParaCarro.productDetail.id)
        if (itemBuscado) {
            let nuevoCarro = carro.map((itemEnCarro)=>{
            if (itemEnCarro.ID === itemParaCarro.id){
                itemEnCarro.cant += itemParaCarro.cant
                return itemEnCarro
            }else{
                return itemEnCarro
            }
            });
            setCarro(nuevoCarro)
        }else {
            const nuevoCarro = [...carro]
            nuevoCarro.push(itemParaCarro)
            setCarro(nuevoCarro)
        }
    }

    function totalItemsEnCarro(){
        let total = 0 ;
        carro.forEach(itemEnCarro => {
            total = total + itemEnCarro.cant;
        });
        return total;
    }

    function totalPrecioCarro (){
        let total = 0 ;
        carro.forEach(item =>{
            total = total + (item.productDetail.price * item.cant);
    })
      return total;
    }
    
    function eliminarItemCarro(id){
        const nuevoCarro = carro.filter((item) => item.productDetail.id !== id )
        setCarro(nuevoCarro) 
    }
    
    function vaciarCarro(){
        setCarro([]);
    }

    const value = {
        carro,
        agregarAlCarro,
        totalItemsEnCarro,
        totalPrecioCarro,
        eliminarItemCarro,
        vaciarCarro
      };
return (
    <cartContext.Provider value={value}> {props.children} </cartContext.Provider>
) 
}


export default cartContext; 