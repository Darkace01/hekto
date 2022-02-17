import React from "react";
import ProductImg1 from "../../assets/images/chair-1.png";

//styling
import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
} from "./FeaturedProduct.styles";

const FeaturedProduct = ({ imageUrl, code, price }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={ProductImg1} alt="product" />
      </ImageWrapper>
      <ContentWrapper>
        <h3>Cantilever chair</h3>
        <p>Code - Y523201</p>
        <p>$42.00</p>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FeaturedProduct;
