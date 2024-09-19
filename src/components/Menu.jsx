import React from "react";
import Navbar from "./Navbar";

function Menu() {
  const menuItems = [
    { name: "Pizza", description: "Delicious cheesy pizza with fresh toppings.", price: "$12.99", img: "path-to-pizza-image" },
    { name: "Burger", description: "Juicy beef burger with a crispy bun.", price: "$9.99", img: "path-to-burger-image" },
    { name: "Pasta", description: "Creamy Alfredo pasta with parmesan cheese.", price: "$11.99", img: "path-to-pasta-image" },
    { name: "Salad", description: "Fresh vegetable salad with a light vinaigrette.", price: "$7.99", img: "path-to-salad-image" },
    { name: "Sushi", description: "Assorted sushi platter with soy sauce and wasabi.", price: "$14.99", img: "path-to-sushi-image" },
  ];

  return (
   <div>
    <Navbar/>
    
    <div className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} className="menu-item-img" />
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}

export default Menu;
