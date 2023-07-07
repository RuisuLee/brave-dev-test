import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import operators from "./operators";
import loader from "./loader";

export const store = configureStore({
  reducer: { operators, loader },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
