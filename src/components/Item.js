import React, { useState } from "react";

function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState(false)

  function cartHandler() {
    setCartStatus(!cartStatus)
  }

  const cartClass = cartStatus ? "in-cart" : ""
  const btnText = cartStatus ? "Remove From Cart" : "Add to Cart"
  const btnStyle = cartStatus ? {color:"white", background:"purple"} : {color:"black", background:"yellow"}

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandler} style={btnStyle}>{btnText}</button>
    </li>
  );
}

export default Item;
