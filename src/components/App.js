import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: counter });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: counter });
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
