import { IExampleProps } from "../../../types/reduxTypes/exampleProps";
import { SliceReducers } from "../../store";

const actions: SliceReducers<IExampleProps> = {
  setError(state, action) {
    state.error = action.payload;
  },
  setExampleValueTest(state, action) {
    state.exampleState = action.payload;
  },
};

export default actions;
