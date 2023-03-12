import React from "react";
import "./DishCardList.css";
import DishCard from "../DishCard/DishCard";

const DishCardList = (props) => {
  console.log(props);
  return (
    <div className="dish-card-list">
      {props.items !== undefined && props.items.map(function (item) {
        return (
          <DishCard key ={item._id}
            id={item._id}
            name={item._name}
            description={item._description}
            price={item._price}
            active={item._active}
            preperationTime={item._preperation_time}
          />
        );
      })}
    </div>
  );
};

export default DishCardList;


