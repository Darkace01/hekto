import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  justify-content: center;
  transition: all 0.3s;
  border: 1px solid var(--color-white);
  &:hover {
    border: 1px solid var(--color-blue);
  }

  &:hover div:last-child {
    background-color: var(--color-blue);
    color: var(--color-white) !important;
    border: 1px solid black;
  }
  &:hover h3 {
    color: var(--color-white);
  }
  &:hover p {
    color: var(--color-white);
  }
`;

export const ImageWrapper = styled.div`
  background: #f6f7fb;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
    margin: auto;
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px 30px;
  text-align: center;
  transition: all 0.3s;

  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: var(--color-primary);
  }
  p {
    font-family: Josefin Sans;
    font-size: 14px;
    line-height: 16px;
    color: #151875;
  }
`;
