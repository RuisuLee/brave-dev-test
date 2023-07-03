import { OPERATORS } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

interface IOperator {
  name: string;
  icon: string;
}

interface IOperatorsState {
  operators: Array<IOperator>;
}

const initailOperators = localStorage.getItem("operators");

const initialState: IOperatorsState = {
  operators: initailOperators ? JSON.parse(initailOperators) : OPERATORS,
};

const operatorsSlice = createSlice({
  name: "operators",
  initialState,
  reducers: {
    addOperator: (state, action) => {
      state.operators.push(action.payload);
      localStorage.setItem("operators", JSON.stringify(state.operators));
    },
  },
});

export const { addOperator } = operatorsSlice.actions;
export default operatorsSlice.reducer;
