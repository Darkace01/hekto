import styled from "styled-components";

export const SectionHeader = styled.h1`
  text-transform: capitalize;
  font-family: Josefin Sans;
  font-size: 36px;
  line-height: 42px;
  font-weight: 800;
  color: var(--color-blue);
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;

export const SectionPadding = styled.div`
  padding: 40px;
`;
