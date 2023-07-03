import { STYLE_VARS } from "@/constants";
import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    140deg,
    ${STYLE_VARS.gradient.from} 0%,
    ${STYLE_VARS.gradient.to} 100%
  );
`;
