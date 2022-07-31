import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    const LoginButtonStyle = {
      color: "white",
      backgroundColor: this.state.password.length > 8 ? "green" : "red",
      borderColor: "black",
    };

    return (
      <div>
        <form>
          <fieldset>
            <legend>Form</legend>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                autoComplete="username"
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                autoComplete="current-password"
              ></input>
            </label>
            <label>
              Remember?
              <input
                type="checkbox"
                name="remember"
                checked={this.state.remember}
                onChange={this.handleInputChange}
              ></input>
            </label>
            <label>
              Click to
              <input
                type="button"
                name="login"
                value="Login"
                style={LoginButtonStyle}
                disabled={!(this.state.username && this.state.password)}
                onClick={() => {
                  this.props.onLogin(this.state);
                }}
              ></input>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state = {};

  onLogin = (childState) => {
    console.log(childState);
    this.setState({ ...childState });
  };

  render() {
    return (
      <div>
        <Login onLogin={this.onLogin} />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
