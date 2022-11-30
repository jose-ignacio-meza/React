import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI, { getItemByCategoryFromAPI,} from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const [cargando, setCargando] = useState([true])
  const {category, setCategory} = useParams();

  useEffect(() => {
    if (category) {
      getItemByCategoryFromAPI(category).then((itemsDB)=> {
        setProductsList(itemsDB);
        setCargando(false);
      });
    }else 
    getItemsFromAPI().then((itemsDB) => {
      setProductsList(itemsDB);
      setCargando(false);
    });
  }, [category]);


  if(cargando) return <Loader/>
  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;
