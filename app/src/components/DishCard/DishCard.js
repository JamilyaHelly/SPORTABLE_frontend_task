import React, { useState } from "react";
import "./DishCard.css";
import CustomButton from "../CustomButton/CustomButton";
import Modal from "../Modal/Modal";
import DishEdit from "../DishEdit/DishEdit";

const DishCard = (props) => {
  const [isActive, setIsActive] = useState(props.active);
  const [isOpen, setIsOpen] = useState(false);

  const handleDishEditSubmit =()=>{
    setIsOpen(false);
    // refreshDishesList()
  }
  const handleDishEditCancel = ()=>{
    setIsOpen(false);
  }
  console.log(props)
  return (
    <div className={(!isActive && "passive") + " dish"}>
      <div className="dish-preview">
        <h2>{props.name}</h2>
      </div>
      <div className="dish-info">
        <div className="dish-info-row">
          <div className="dish-description">{props.description}</div>
          <div className="dish-time-price">
            <div className="dish-time">
              {props.preperationTime}
              <span>min</span>
            </div>
            <div className="dish-price">
              {props.price}
              <span>€</span>
            </div>
          </div>
        </div>

        <div className="dish-btn-group dish-info-row">
          <CustomButton text="delete" buttonType="alert" onClick={() => {}} />
          <CustomButton text="edit" buttonType="warning" onClick={() => {setIsOpen(true);}} />
          
        </div>
        
      </div>
      <Modal open={isOpen}>
      <DishEdit  item ={props } onSubmit={handleDishEditSubmit} onCancel={handleDishEditCancel}></DishEdit>
      </Modal>
    </div>
  );
};

export default DishCard;
