import React from "react";

//styling
import { SectionHeader, ProductWrapper, SectionPadding } from "./Home.styles";
//component
import HomeSlider from "../../component/HomeSlider";
import FeaturedProduct from "../../component/FeaturedProduct";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <SectionPadding />
      <div className="theme-container py-3 justify-content-center">
        <SectionHeader>Featured Products</SectionHeader>
      </div>
      <div className="theme-container py-3 justify-content-center">
        <ProductWrapper>
          <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct />
        </ProductWrapper>
      </div>
    </div>
  );
};

export default Home;
