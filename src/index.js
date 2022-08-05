import React, { useState } from "react";
import ReactDOM from "react-dom/client";
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

class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
