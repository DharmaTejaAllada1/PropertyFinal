import React from "react";

const sizeClasses = {
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsLight10: "font-light font-poppins",
  txtPoppinsRegular26: "font-normal font-poppins",
  txtInterBold23: "font-bold font-inter",
  txtInterMedium19WhiteA700: "font-inter font-medium",
  txtInterMedium48: "font-inter font-medium",
  txtInterLight18: "font-inter font-light",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsLight18Lightblue900: "font-light font-poppins",
  txtInterBold42: "font-bold font-inter",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtPoppinsRegular109: "font-normal font-poppins",
  txtPoppinsBold26: "font-bold font-poppins",
  txtInterMedium19: "font-inter font-medium",
  txtInterBold73Blue700: "font-bold font-inter",
  txtInterRegular14Blue700: "font-inter font-normal",
  txtInterRegular109: "font-inter font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterBold37: "font-bold font-inter",
  txtInterMedium35: "font-inter font-medium",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtInterMedium55: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtInterRegular109Gray600: "font-inter font-normal",
  txtInterBold73: "font-bold font-inter",
  txtInterRegular109Lightblue900: "font-inter font-normal",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsMedium45: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold42: "font-poppins font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterLight20: "font-inter font-light",
  txtInterMedium20Gray90002: "font-inter font-medium",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterMedium40: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular36: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsLight18Bluegray900: "font-light font-poppins",
  txtPoppinsRegular109Blue700: "font-normal font-poppins",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular17: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
