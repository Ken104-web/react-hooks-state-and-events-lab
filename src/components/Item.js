import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  // Function to handle adding/removing the item from the cart
  const handleCart = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{Item.name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
