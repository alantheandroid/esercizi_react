import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Message extends React.Component {
  render() {
    return (
      <div>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Message />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

root.render(<App />);
