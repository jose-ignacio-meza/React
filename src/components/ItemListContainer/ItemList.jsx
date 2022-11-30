import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item"
import Loader from "../Loader/Loader";

function ItemList(props) {
  let arrayVacio = props.productsList.legth === 0;
  return (
    <FlexWrapper>
      {arrayVacio? <Loader/>
      :
      props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;