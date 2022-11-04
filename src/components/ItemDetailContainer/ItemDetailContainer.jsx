import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    let {id}= useParams();
    useEffect(() => {
      getSingleItemFromAPI(id).then((itemDB) => {
          setProduct(itemDB);
        })
        .catch((error) => alert(error));
    }, [id]);
    return (
        <ItemDetail productDetail={product}/>  
    );
  }

export default ItemDetailContainer;