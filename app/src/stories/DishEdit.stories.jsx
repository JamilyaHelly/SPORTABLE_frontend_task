import React from "react";
import DishEdit from "../components/DishEdit/DishEdit";

export default {
  title: "DishEdit",
  component: DishEdit,
};

const Template = (args) => (
  <div style={{display:"flex", width:"500px"}}>
    <DishEdit {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
