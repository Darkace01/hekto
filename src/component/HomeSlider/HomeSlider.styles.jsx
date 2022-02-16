import styled from "styled-components";
import backgroundImage from "../../assets/images/slider-1.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  padding: 50px 300px;

  .sub-title {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-primary);
  }

  h1 {
    font-family: Josefin Sans;
    font-size: 53px;
    line-height: 82px;
    letter-spacing: 0.015em;
    font-weight: bold;
  }

  .description {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #8a8fb9;
  }
`;
