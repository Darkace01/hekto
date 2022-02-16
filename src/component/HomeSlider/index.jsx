import React from "react";

//styling
import { Wrapper } from "./HomeSlider.styles";

import CustomButton from "../CustomButton";

const HomeSlider = () => {
  return (
    <Wrapper>
      <p className="sub-title">Best Furniture For Your Castle....</p>
      <h1>
        New Furniture Collection <br />
        Trends in 2020
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        <br />
        adipiscing in phasellus non in justo.
      </p>
      <CustomButton>Shop Now</CustomButton>
    </Wrapper>
  );
};

export default HomeSlider;
