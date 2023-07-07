import { OPERATORS } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export interface IOperator {
  id: number;
  name: string;
  icon: string;
}

interface IOperatorsState {
  operators: Array<IOperator>;
}

const initialOperators =
  typeof window !== "undefined" ? localStorage.getItem("operators") : "";

const initialState: IOperatorsState = {
  operators: initialOperators ? JSON.parse(initialOperators) : OPERATORS,
};

const operatorsSlice = createSlice({
  name: "operators",
  initialState,
  reducers: {
    addOperator: (state, action) => {
      const newOperator = {
        id: state.operators.length,
        ...action.payload,
      };
      state.operators.push(newOperator);
      localStorage.setItem("operators", JSON.stringify(state.operators));
    },
  },
});

export const { addOperator } = operatorsSlice.actions;
export default operatorsSlice.reducer;
