import { device } from "@/constants";
import { styled } from "styled-components";
import { Operator } from "./Operator";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { IOperator } from "@/lib/store/operators";

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
  const [operators, setOperators] = useState<Array<IOperator>>([]);
  const ops = useSelector((state: RootState) => state.operators.operators);

  useEffect(() => {
    setOperators(ops);
  }, []);

  return (
    <OperatorsList>
      {operators.map((operator) => (
        <Operator key={operator.name} {...operator} />
      ))}
    </OperatorsList>
  );
};
