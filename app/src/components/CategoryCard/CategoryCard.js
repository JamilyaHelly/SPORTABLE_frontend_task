import React from 'react';
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <div className='category-card-item'>
        <div className='category-card-item-content'>
            <div className='category-card-item-bg'></div>
            <div className='category-card-item-title'>{props.title}</div>
        </div>
    </div>
  )
};

export default CategoryCard;