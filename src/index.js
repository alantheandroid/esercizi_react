import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Form</legend>
            <label>
              Username
              <input
                type="text"
                name="username"
                autoComplete="username"
                autoFocus
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                autoComplete="current-password"
              ></input>
            </label>
            <label>
              Remember?
              <input
                type="checkbox"
                name="remember"
                /* checked={this.state.remember} */
              ></input>
            </label>
            <label>
              Click to
              <button type="submit" name="login">
                Login
              </button>
            </label>
            <button type="reset" name="reset">
              Reset
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <UncontrolledLogin />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
