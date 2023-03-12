import React from "react";
import CustomButton from "../components/CustomButton/CustomButton";

export default {
    
    title: 'CustomButton',
    component: CustomButton,
    argTypes:{
    buttonType:{
      control:{type:"select"},
      options:["primary","secondary","warning","alert"]
    }
    }
  };
  const Template = (args) => <CustomButton {...args} />;

  export const Default = Template.bind({});
  Default.args={
    text:"Button",
    buttonType:"primary"
  }