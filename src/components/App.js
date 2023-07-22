import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "../index.css";



function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  // Create a state variable for tracking the current mode
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const  handleClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
   
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>     
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


export default App;
