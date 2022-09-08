import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const selector = (state: RootState) => state.exampleReducer;

const exampleValue = createSelector([selector], (state) => state.exampleState);
const exampleError = createSelector([selector], (state) => state.error);

export default {
  exampleValue,
  exampleError,
};
