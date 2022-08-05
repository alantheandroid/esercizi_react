import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="container">
      <form>
        <fieldset>
          <legend>Form</legend>
          <label>
            Username
            <input
              name="username"
              type="text"
              value={data.username}
              onChange={handleInputChange}
              autoComplete="username"
            ></input>
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={handleInputChange}
              autoComplete="current-password"
            ></input>
          </label>
          <label>
            Remember?
            <input
              name="remember"
              type="checkbox"
              checked={data.remember}
              onChange={handleInputChange}
            ></input>
          </label>
          <label>
            Click to
            <input
              name="login"
              type="button"
              value="Login"
              disabled={!(data.username && data.password)}
            ></input>
          </label>
        </fieldset>
      </form>
    </div>
  );
}

class App extends React.Component {
  state = {};

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
