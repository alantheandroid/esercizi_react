import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

/* class Welcome extends React.Component {
  state = {};
  render() {
    return <p className="welcome">Welcome, Alessio!</p>;
  }
} */

function Welcome({ name }) {
  return (
    <div className="container">
      <p className="welcome">Welcome, {name}!</p>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={"Alessio"} />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
