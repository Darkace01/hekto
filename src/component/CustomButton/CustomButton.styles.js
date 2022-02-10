import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--color-primary);
  height: 50px;
  border-radius: 0;
  color: var(--color-white);
  border: 0;
  font-size: 20px;
  transition: all 0.3s;
  outline: none;
  padding: 0 20px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
