import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    divClassName: {},
    text: "Build intelligent apps at enterprise scale with the Azure AI portfolio.",
    frameVector: "/img/vector-4-1.svg",
    framePropertyDefaultClassName: {},
  },
};
