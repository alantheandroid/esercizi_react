import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
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
