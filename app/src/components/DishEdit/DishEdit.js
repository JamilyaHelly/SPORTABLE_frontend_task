import React, { useState } from "react";
import "./DishEdit.css";
import CustomButton from "../CustomButton/CustomButton";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { editDish } from "../../services/ServerApiServices";

const DishEdit = (props) => {
  const [id, setId] = useState(props.item && props.item.id ? props.item.id: null);
const [name, setName] = useState(props.item && props.item.name ? props.item.name: "");
const [description, setDescription] = useState(props.item && props.item.description ?props.item.description:"" );
const [prepTime, setPrepTime] = useState(props.item && props.item.prepTime ? props.item.prepTime:0);
const [price, setPrice] = useState(props.item && props.item.price ? props.item.price :0);
const [isActive, setIsActive] = useState(props.item && props.item.active ? props.item.active : false);



const handleSubmit = (e)=>{
  e.preventDefault();

  let dish = {
    _id:id,
    _name: name,
    _description: description,
    _preperation_time:prepTime,
    _price:price,
    _active :isActive
  }

  editDish(dish).then((resp)=>{
    console.log(resp);
    props.onSubmit();
  })
}


  return (
    <form className="dish-edit-form" onSubmit={handleSubmit}>
      <div className="dish-edit">
        <div className="dish-edit-row">
          <label>Category: </label>
          <label name="category"> Main dish</label>
        </div>
        <div className="dish-edit-col">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div className="dish-edit-col">
          <label>Description:</label>
          <textarea rows="5" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        </div>
        <div className="dish-edit-row">
          <div className="dish-edit-row prep-time">
            <label>Preperation Time :</label>
            <input name="prepTime" type="number" min="0" value={prepTime} onChange={(e)=>{setPrepTime(e.target.value)}}></input><span>min</span>
          </div>
          <div className="dish-edit-row price">
            <label>Price:</label>
            <input name="price" type="number" min="0" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input><span>€</span>
          </div>
        </div>

        <div className="dish-edit-row">
          <label> Is active:</label>
          <div className="toggle-element"><ToggleSwitch name="isActive" status={isActive} onChange={(status)=>{setIsActive(status)}}></ToggleSwitch></div>
          
        </div>
        <div className="dish-edit-row button-group">
          <CustomButton text="cancel" buttonType="alert" onClick={props.onCancel}/>
          <CustomButton text="save" buttonType="primary" type="submit" />

        </div>
      </div>
    </form>
  );
};

export default DishEdit;
