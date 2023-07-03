import { createSlice } from "@reduxjs/toolkit";

interface IOperatorState {
  operator: string;
}

const initialState: IOperatorState = {
  operator: "",
};

const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    chooseOperator: (state, action) => {
      state.operator = action.payload;
    },
  },
});

export const { chooseOperator } = operatorSlice.actions;
export default operatorSlice.reducer;
