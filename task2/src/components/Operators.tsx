import { OPERATORS, device } from "@/constants";
import { styled } from "styled-components";
import { Operator } from "./Operator";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const OperatorsList = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  margin: 20px auto;

  @media ${device.mobile} {
    width: 90%;
  }
`;

export const Operators = () => {
  const operators = useSelector(
    (state: RootState) => state.operators.operators
  );
  return (
    <OperatorsList>
      {operators.map((operator, index) => (
        <Operator key={index} {...operator}></Operator>
      ))}
    </OperatorsList>
  );
};
