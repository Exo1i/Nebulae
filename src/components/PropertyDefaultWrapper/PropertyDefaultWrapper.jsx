/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Frame } from "../Frame";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  divClassName,
  text = "Build intelligent apps at enterprise scale with the Azure AI portfolio.",
  frameVector = "/img/vector-4-1.svg",
  framePropertyDefaultClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`flex items-center pt-[54px] pb-[31px] px-[35px] relative flex-col rounded-[10px] gap-6 bg-[#2c324c] justify-center ${
        state.property1 === "variant-2" ? "border-transparent" : ""
      } ${state.property1 === "variant-2" ? "w-[270px]" : "w-[266px]"} ${
        state.property1 === "variant-2"
          ? "[border-image:linear-gradient(to_bottom,rgb(244.37,174.12,228.92),rgb(110.5,211.44,243.31)_43.5%,rgb(246.5,66.76,131.47)_100%)_1]"
          : ""
      } ${state.property1 === "variant-2" ? "border-2 border-solid" : ""} ${
        state.property1 === "variant-2" ? "h-[219px]" : "h-[215px]"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <p
        className={`[font-family:'Source_Code_Pro',Helvetica] w-[185px] tracking-[0] text-[15px] text-white font-normal leading-[15px] relative ${
          state.property1 === "variant-2" ? "mt-[-2.00px]" : "mt-[-3.00px]"
        } ${divClassName}`}
      >
        {text}
      </p>
      <Frame className={framePropertyDefaultClassName} property1="default" vector={frameVector} />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  frameVector: PropTypes.string,
};
