import React from "react";
import CategoryCardList from "../components/CategoryCardList/CategoryCardList";

export default{
    title:"CategoryCardList",
    component:CategoryCardList,
};

const Template =(args)=> <CategoryCardList{...args}/>;
export const Default= Template.bind({});
Default.args={
    items:[{name:"lorems1"},{name:"lorems2"},{name:"lorems3"}]
}