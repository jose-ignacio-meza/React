import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItemsFromAPI from "../../mockService/mockService";


function ItemlistContainer (props){
    const [productsList, setProductsList] = useState([]);
  useEffect(() => {

        getItemsFromAPI().then((itemsDB) => {
            setProductsList(itemsDB);
        });
    }, []);

  return <Item productsList={productsList} />;
}

export default ItemlistContainer;