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

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Alessio" />
      </div>
    );
  }
}

root.render(<App />);
