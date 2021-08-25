import styled, { css } from "styled-components";

const size = (props) => {
  const size = props.size || 100;
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

const Circle = styled.div`
  ${(props) => size(props)}
  border-radius: 50%;
`;

export default Circle;
