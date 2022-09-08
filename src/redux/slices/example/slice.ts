import { createSlice } from "@reduxjs/toolkit";
import actions from "redux/slices/example/actions";
import { getInitialState } from "redux/slices/example/initialState";

const slice = createSlice({
  name: "example",
  initialState: getInitialState(),
  reducers: actions,
});

export default slice;
