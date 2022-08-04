import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Sum({ numbers = [28, 12, 57] }) {
  const total = numbers.reduce((a, b) => a + b, 0);
  return (
    <div className="container">
      <p className="numbers">
        {numbers[0]} + {numbers[1]} + {numbers[2]} =
      </p>
      <h1 className="result">{total}</h1>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Sum />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
