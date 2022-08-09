import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function useLogin() {
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

  return {
    username: data.username,
    password: data.password,
    remember: data.remember,
    onInputChange: handleInputChange,
  };
}

function HookLogin(data) {
  const { username, password, remember, onInputChange } = useLogin({
    username: "",
    password: "",
    remember: false,
  });

  return (
    <div className="panel">
      <form>
        <fieldset className="claymorph panel">
          <legend className="claymorph panel">
            <b>Form</b>
          </legend>
          <label>
            Username
            <input
              name="username"
              type="text"
              value={username}
              onChange={onInputChange}
              autoComplete="username"
            ></input>
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={onInputChange}
              autoComplete="current-password"
            ></input>
          </label>
          <label>
            Remember?
            <input
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={onInputChange}
            ></input>
          </label>
          <label>
            Click to
            <input
              name="login"
              type="button"
              value="Login"
              disabled={!(username && password)}
            ></input>
          </label>
        </fieldset>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="container flex-vertical">
      <HookLogin />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
