import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryCardList.css";

const CategoryCardList = (props) => {
  const createList = (arr) => {
    return arr.map((item) => {
      return <CategoryCard key={item.id} title={item.name}></CategoryCard>;
    });
  };

  return (
    <div className="category-card-list">
      {props.items && createList(props.items)}
    </div>
  );
};

export default CategoryCardList;
