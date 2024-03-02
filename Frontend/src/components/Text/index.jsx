import React from "react";

const sizes = {
  xs: "text-base font-medium leading-[180%]",
  s: "text-lg font-normal leading-[180%]",
  md: "text-xl font-normal leading-[180%]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
