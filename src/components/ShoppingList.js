import React, { useState } from "react";
import Item from "./Item";
// import items from "../data/items"

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")
  
  function ddValueHandler(e) {
    setCategory(category => e.target.value)
  }

  const newList = category === "All" ? items : items.filter(item => item.category === category)
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={ddValueHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
