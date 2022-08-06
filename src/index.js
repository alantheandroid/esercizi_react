import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function ClickCounter({ initialValue = 0, onCounterChange }) {
  const [count, setCounter] = useState(initialValue);

  useEffect(() => onCounterChange(count), [count, onCounterChange]);

  function counterIncrement() {
    setCounter((c) => c + 1);
  }

  function countReset() {
    setCounter(initialValue);
  }

  return (
    <div className="container">
      <h1>Counter : {count}</h1>
      <button onClick={counterIncrement}>Increment ➕</button>
      <button onClick={countReset}>Reset 🔄</button>
    </div>
  );
}

function App() {
  function onCounterChange(count) {
    console.log("count", count);
  }

  return (
    <div>
      <ClickCounter onCounterChange={onCounterChange} />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
