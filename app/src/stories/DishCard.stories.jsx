import React from "react";
import DishCard from "../components/DishCard/DishCard";

export default {
  title: "DishCard",
  comonent: DishCard,
};

const Template = (args) => <DishCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "Pizza",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
  price: 14,
  active: true,
  preperationTime: 15,
};


export const Secondary = Template.bind({});
Secondary.args = {
  name: "Pizza",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
  price: 14,
  active: true,
  preperationTime: 15,
};
