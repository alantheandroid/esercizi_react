import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Welcome extends React.Component {
  render() {
    return <p>Welcome, {this.props.username}</p>;
  }
}

class InteractiveWelcome extends React.Component {
  state = { username: "" };

  handleUsernameInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.username}
          onChange={this.handleUsernameInputChange}
        ></input>
        <Welcome username={this.state.username} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <InteractiveWelcome />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
