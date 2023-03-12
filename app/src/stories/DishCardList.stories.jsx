import React from 'react';
import DishCardList from '../components/DishCardList/DishCardList';


export default {
  title: 'DishCardList',
  component: DishCardList,
 
};

const Template = (args) => <DishCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items:[
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      price: 14,
      active: true,
      preperationTime: 15,
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      price: 14,
      active: true,
      preperationTime: 15,
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      price: 14,
      active: true,
      preperationTime: 15,
    },
    {
      name: "Pizza Margarita",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      price: 14,
      active: true,
      preperationTime: 15,
    },{
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
      price: 14,
      active: true,
      preperationTime: 15,
    }
  ]
  
};
