import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    property1: {
      options: ["hovered", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hovered",
    className: {},
    vector: "/img/vector-4-1.svg",
  },
};
