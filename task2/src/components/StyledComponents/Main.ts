import { STYLE_VARS, device } from "@/constants";
import styled from "styled-components";

export const Main = styled.section`
  background-color: ${STYLE_VARS.white};
  border-radius: 5px;
  width: 400px;
  height: auto;
  max-height: 550px;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 40px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${STYLE_VARS.white};
    border: 1px solid ${STYLE_VARS.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${STYLE_VARS.lightMainColor};
  }

  @media ${device.mobile} {
    padding: 20px;
    margin: 0 10px;
    max-height: 400px;
    width: 100%;
  }

  @media ${device.tablet} {
    max-height: 350px;
  }
`;
