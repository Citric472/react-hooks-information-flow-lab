// App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
