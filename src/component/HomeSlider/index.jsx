import React from "react";

//styling
import { Wrapper } from "./HomeSlider.styles";

//components
import CustomButton from "../CustomButton";
import FeaturedProduct from "../FeaturedProduct";

const HomeSlider = () => {
  return (
    <Wrapper>
      <div>
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
      </div>
    </Wrapper>
  );
};

export default HomeSlider;
