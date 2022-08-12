import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div className="container flex-vertical">
      <h1 className="panel glassmorph">Count: {counter}</h1>
      <div className="flex-horizontal">
        <button
          className="counterButton round glassmorph"
          onClick={onIncrement}
        >
          ➕
        </button>
        <button
          className="counterButton round glassmorph"
          onClick={onDecrement}
        >
          ➖
        </button>
        <button
          className="panel glassmorph counterButton resetButton"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div>
        <HookCounter />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
