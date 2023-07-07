import { styled } from "styled-components";
import { Operators } from "./Operators";
import { TEXTS } from "@/constants";
import { AddOperator } from "./AddOperator";
import { Main } from "./StyledComponents/Main";

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`;

export const MainPage = () => {
  return (
    <Main>
      <Title>{TEXTS.chooseOperator}</Title>
      <Operators />
      <AddOperator />
    </Main>
  );
};
