import React, { useState } from "react";
import MenuSection from "./menuSection";
import MenuItem from "./menuItem";


const Menu = () => {
  const [showMenuItem, setMenuItem] = useState(null);

  var items = [
    {
      photo: `${require("../../assets/pizza_1.jpg")}`,
      name: "Pizza Vege",
      price: "10 $",
      calories: "",
      type: "",
      reference: "",
      ingredients: ["meat", "tomato", "parsley", "tarator"],
    },
    {
      photo: `${require("../../assets/pizza_2.jpg")}`,
      name: "Pizza Papperoni",
      price: "12 $",
      calories: "",
      type: "",
      reference: "",
      ingredients: ["meat", "tomato", "mushroom", "cheese"],
    },
    {
      photo: `${require("../../assets/wings.jpg")}`,
      name: "Wings",
      price: "8 $",
      calories: "",
      type: "",
      reference: "",
      ingredients: ["meat", "tomato", "parsley", "tarator"],
    },
  ];

  const presentItem = (value) => {
    setMenuItem(items.find((item) => item.name === value));
  };

  return (
    <div className="container px-5  mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full mt-3">
        <div className="md:w-1/5 md:pr-8 ">
          <MenuSection items={items} setMenuList={presentItem} />
        </div>
        <div className="md:w-4/5 rounded-lg ">
          {showMenuItem ? (
            <MenuItem item={showMenuItem} />
          ) : (
            <MenuItem item={items[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
