import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI, { getItemByCategoryFromAPI,} from "../../mockService/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const {category, setCategory} = useParams();
  useEffect(() => {
    if (category) {
      getItemByCategoryFromAPI(category).then((itemsDB)=> {
        setProductsList(itemsDB);
      });
    }else 
    getItemsFromAPI().then((itemsDB) => {
      setProductsList(itemsDB);
    });
  }, [category]);

  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;
