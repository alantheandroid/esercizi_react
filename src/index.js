import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Welcome extends React.Component {
  state = {};
  render() {
    return <p className="welcome">Welcome, Alessio!</p>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
