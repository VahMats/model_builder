import React from "react";

import { dispatch, useAppSelector } from "../redux/hooks";
import { exampleMiddleware, exampleSelector } from "../redux/slices/example";

const App = () => {
  const exampleValue = useAppSelector(exampleSelector.exampleValue);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(exampleMiddleware.setExampleValue("SOME TEST THAT IS NEW"));
        }}
      >
        Do it
      </button>
      <input
        type="text"
        onChange={(e) => {
          dispatch(exampleMiddleware.setExampleValue(e.target.value));
        }}
      />
      <br />
      {exampleValue}
    </div>
  );
};

export default App;
