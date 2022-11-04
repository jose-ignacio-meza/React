import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      getSingleItemFromAPI().then((itemDB) => {
          setProduct(itemDB);
        })
        .catch((error) => alert(error));
    }, []);
 
    return (
        <ItemDetail productDetail={product}/>  
    );
  }

export default ItemDetailContainer;