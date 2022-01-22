import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rotate = keyframes`
    to {
        transform: rotateZ(360deg);
    }
`;

export const Logo = styled.img`
  height: 7.5vh;
  min-height: 120px;
  animation: ${Rotate} 1.5s linear infinite;
  overflow: hidden;
  border-radius: 100px;
  outline: none;
`;
