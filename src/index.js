import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class ClickTracker extends React.Component {
  state = {
    button: "",
  };

  handleButtonTracker = (event) => {
    this.setState(() => {
      return {
        button: event.target.name,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>You just pressed: {this.state.button}</h1>
        <button
          type="button"
          name="Button 1"
          onClick={this.handleButtonTracker}
        >
          Button 1
        </button>
        <button
          type="button"
          name="Button 2"
          onClick={this.handleButtonTracker}
        >
          Button 2
        </button>
        <button
          type="button"
          name="Button 3"
          onClick={this.handleButtonTracker}
        >
          Button 3
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ClickTracker />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
