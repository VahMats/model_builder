import { combineReducers } from "redux";

import { exampleSlice } from "./slices/example";

const reducer = combineReducers({
  exampleReducer: exampleSlice.reducer,
});

export default reducer;
