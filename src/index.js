import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <div className="flex-vertical">
        <h1 className="panel glassmorph flex-horizontal fill">
          Count: <span className="accentColor">{counter}</span>
        </h1>
        <div className="flex-horizontal">
          <button className="round glassmorph" onClick={onIncrement}>
            ➕
          </button>
          <button className="round glassmorph" onClick={onDecrement}>
            ➖
          </button>
          <button className="panel glassmorph resetButton" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Welcome({ name }) {
  return (
    <div className="container flex-vertical">
      <h1 className="panel glassmorph">
        Welcome, <span className="accentColor">{name}</span>!
      </h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Alessio" />} />
      <Route path="counter" element={<HookCounter />} />
    </Routes>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
