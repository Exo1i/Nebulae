/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Frame9 = ({ property1, className, vector = "/img/vector-4-1.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[124px] h-[50px] ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <button className="all-[unset] box-border inline-flex items-center p-0.5 justify-center relative">
        <button
          className={`all-[unset] box-border border-2 border-solid border-black bg-white relative ${
            state.property1 === "hovered" ? "w-[152px]" : ""
          } ${state.property1 === "default" ? "inline-flex" : ""} ${
            state.property1 === "default" ? "items-center" : ""
          } ${state.property1 === "default" ? "gap-2.5" : ""} ${
            state.property1 === "default" ? "flex-[0_0_auto]" : ""
          } ${state.property1 === "hovered" ? "shadow-[-6px_10px_0px_#9d50ff]" : "shadow-[-4px_4px_0px_#000000]"} ${
            state.property1 === "default" ? "px-[18px] py-4" : ""
          } ${state.property1 === "hovered" ? "h-[46px]" : ""} ${
            state.property1 === "default" ? "justify-center" : ""
          }`}
        >
          {state.property1 === "default" && (
            <>
              <div className="relative w-fit mt-[-2.00px] [font-family:'Source_Code_Pro',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                Learn More
              </div>
              <img className="relative w-[7.06px] h-[12.71px] mr-[-0.71px]" alt="Vector" src={vector} />
            </>
          )}

          {state.property1 === "hovered" && (
            <>
              <div className="absolute top-3.5 left-[18px] [font-family:'Source_Code_Pro',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                Learn More
              </div>
              <div className="absolute w-2.5 h-[13px] top-[17px] left-[121px]">
                <img className="absolute w-[7px] h-[13px] top-0 left-0" alt="Vector" src="/img/vector-4-1.svg" />
                <img className="absolute w-[7px] h-[13px] top-0 left-[3px]" alt="Vector" src="/img/vector-4-1.svg" />
              </div>
            </>
          )}
        </button>
      </button>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Frame9.propTypes = {
  property1: PropTypes.oneOf(["hovered", "default"]),
  vector: PropTypes.string,
};
