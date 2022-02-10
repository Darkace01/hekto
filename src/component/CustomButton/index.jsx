import React from "react";

//styling
import { Wrapper } from "./CustomButton.styles";
const CustomButton = ({ callback, children }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {children}
    </Wrapper>
  );
};

export default CustomButton;
