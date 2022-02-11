import React from "react";

//styling
import { Wrapper } from "./CustomButton.styles";
const CustomButton = ({ callback, children, isFullWidth }) => {
  return (
    <Wrapper type="button" onClick={callback} isFullWidth={isFullWidth}>
      {children}
    </Wrapper>
  );
};

export default CustomButton;
