import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Login extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <form>
          <label>
            Username
            <input type="text" name="Username" autoComplete="username"></input>
          </label>
          <label>
            Password
            <input
              type="password"
              name="Password"
              autoComplete="current-password"
            ></input>
          </label>
          <label>
            Remember
            <input type="checkbox" name="Checkbox"></input>
          </label>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
