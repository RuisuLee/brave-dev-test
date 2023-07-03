import { createSlice } from "@reduxjs/toolkit";

interface ILoaderState {
  isVisible: boolean;
}

const initialState: ILoaderState = {
  isVisible: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoaderVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setLoaderVisibility } = loaderSlice.actions;
export default loaderSlice.reducer;
