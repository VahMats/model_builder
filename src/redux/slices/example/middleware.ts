import API from "manager/API";
import slice from "redux/slices/example/slice";
import { AppDispatch } from "redux/store";

const { setExampleTemplates, setExampleValueTest, setError } = slice.actions;

const exampleMiddleware = () => async (dispatch: AppDispatch) => {
  try {
    const response = await API.example.getData();

    dispatch(setExampleTemplates(response.data.data.exampleData));
  } catch (error) {
    dispatch(setError(error));
  }
};

const setExampleValue = (data: string) => (dispatch: AppDispatch) => {
  try {
    dispatch(setExampleValueTest(data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export default {
  exampleMiddleware,
  setExampleValue,
};
