import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Alessio",
};

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
