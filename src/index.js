import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function ClickCounter({ initialValue = 0 }) {
  const [count, setCounter] = useState(initialValue);

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

function Welcome({ name }) {
  return (
    <div className="container flex-vertical">
      <p className="panel glassmorph">
        Welcome, <b className="accentColor">{name}</b>!
      </p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Alessio" />} />
      <Route path="counter" element={<ClickCounter />} />
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
