import React, { useEffect, useState } from "react";
import "./MainPage.css";
import CategoryCardList from "../../components/CategoryCardList/CategoryCardList";
import DishCardList from "../../components/DishCardList/DishCardList";
import CustomButton from "../../components/CustomButton/CustomButton";
import Modal from "../../components/Modal/Modal";
import DishEdit from "../../components/DishEdit/DishEdit";
import {
  getCategories,
  getDishesByCategory,
} from "../../services/ServerApiServices";
const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
    refreshDishesList()

  }, []);

   const refreshDishesList  = ()=>{
    getDishesByCategory().then((response) => {
        console.log(response);
      response && setDishes(response.data);
    });
   }
  const handleCreateDishClick=()=>{
    setIsOpen(true);
  }

  const handleDishEditCancel = ()=>{
    setIsOpen(false);
  }
  const handleDishEditSubmit =()=>{
    setIsOpen(false);
    refreshDishesList()
  }

  return (
    <div className="main-page">
      <div>
        <CategoryCardList items={categories} />
        <div className="create-dish-button">
          <CustomButton buttonType="primary" text="Create Dish" onClick={handleCreateDishClick} />
        </div>
      </div>

      <div>
        <DishCardList items={dishes}></DishCardList>
      </div>
      <Modal open={isOpen}>
      <DishEdit  onSubmit={handleDishEditSubmit} onCancel={handleDishEditCancel}></DishEdit>
      </Modal>
    </div>
  );
};

export default MainPage;
