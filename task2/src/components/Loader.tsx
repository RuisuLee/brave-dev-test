import { STYLE_VARS } from "@/constants";
import { keyframes, styled } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  opacity: 30%;
  position: fixed;
  z-index: 2;
  background-color: ${STYLE_VARS.lightGray};
`;

const LoaderRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${STYLE_VARS.darkMainColor};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${STYLE_VARS.darkMainColor} transparent transparent
      transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderRing>
        <div />
        <div />
        <div />
        <div />
      </LoaderRing>
    </LoaderWrapper>
  );
};
