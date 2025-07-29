import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";

  function darkModeHandler() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* button for toggling between dark mode and light mode */}
        <button onClick={darkModeHandler}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}