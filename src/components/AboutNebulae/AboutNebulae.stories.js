import { AboutNebulae } from ".";

export default {
  title: "Components/AboutNebulae",
  component: AboutNebulae,
  argTypes: {
    property1: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "inactive",
    propertyInactiveClassName: {},
    propertyInactive: "/img/property-1-inactive.png",
  },
};
