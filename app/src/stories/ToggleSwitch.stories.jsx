import React from "react";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {};
