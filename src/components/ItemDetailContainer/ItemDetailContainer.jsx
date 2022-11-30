import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [cargando, setCargando] = useState([true])

    let {id}= useParams();
    useEffect(() => {
      getSingleItemFromAPI(id).then((itemDB) => {
          setProduct(itemDB);
        })
        .catch((error) => {
          alert(error) 
        })
        .finally(() => setCargando(false))        
    }, [id]);

    if (cargando) return <Loader/>

    return (
        <ItemDetail productDetail={product}/> 
    );
  }

export default ItemDetailContainer;