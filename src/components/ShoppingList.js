
import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredItems =
    selectedCategory === ""
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
