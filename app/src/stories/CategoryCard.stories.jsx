import React from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard";

export default {
  title: "CategoryCard",
  component: CategoryCard,
};

const Template = (args) => <CategoryCard {...args} />;
export const Default = Template.bind({});
Default.args={
    title:"Loremipsu"
};
