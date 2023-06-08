import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImg } = props.data;
  return (
    <div className="product">
      <img src={productImg} />
      <div className="description">
        <p>
          <b>{productName} </b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBtn">Add To Cart</button>
    </div>
  );
};
