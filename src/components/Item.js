import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function Carthandler() {
    setIsInCart((prevInCart) => !prevInCart);
  }

  const liClass = isInCart ? "in-cart" : "";

  const buttonClass = isInCart ? "remove" : "add";

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
       {/* Display item name */}
      <span>{name}</span>
      {/* Display item category */}
      <span className="category">{category}</span>
       {/* Button to change cart status on click */}
      <button className={buttonClass} onClick={Carthandler}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;