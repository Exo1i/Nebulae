import { Frame9 } from ".";

export default {
  title: "Components/Frame9",
  component: Frame9,
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
