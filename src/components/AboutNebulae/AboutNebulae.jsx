/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AboutNebulae = ({
  property1,
  propertyInactiveClassName,
  propertyInactive = "/img/property-1-inactive.png",
}) => {
  return (
    <>
      {property1 === "inactive" && (
        <img
          className={`absolute w-[126px] h-[21px] top-0 left-0 ${propertyInactiveClassName}`}
          alt="Property inactive"
          src={propertyInactive}
        />
      )}

      {property1 === "active" && (
        <div className={`w-[126px] h-[27px] ${propertyInactiveClassName}`}>
          <div className="relative h-7 -top-px">
            <div className="absolute w-[126px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
              About&nbsp;&nbsp;Nebulae
            </div>
            <div className="absolute w-[65px] h-1 top-6 left-[30px] bg-[#d9d9d9] rounded-[5px]" />
          </div>
        </div>
      )}
    </>
  );
};

AboutNebulae.propTypes = {
  property1: PropTypes.oneOf(["inactive", "active"]),
  propertyInactive: PropTypes.string,
};
