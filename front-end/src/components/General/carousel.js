import React from 'react'
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";



function carousel() {
    var items = [
      {
        img: `${require("../../assets/dish_2.jpg")}`,
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        img: `${require("../../assets/dish_1.jpg")}`,
        name: "Random Name #2",
        description: "Hello World!",
      },
      {
        img: `${require("../../assets/dish_2.jpg")}`,
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        img: `${require("../../assets/b2-1920x1280.jpg")}`,
        name: "Random Name #2",
        description: "Hello World!",
      },
    ];

  return (
    <Carousel IndicatorIcon={<></>}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}


function Item(props) {
  return (
    <Paper>
      <img
        className=" w-full  object-center h-60"
        alt="background"
        src={props.item.img}
      />
    </Paper>
  );
}

export default carousel