import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HookCounter from "./components/HookCounter";
import Welcome from "./components/Welcome";
import HookGitHubUser from "./components/HookGitHubUser";
import ShowGitHubUser from "./components/ShowGitHubUser";

import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <div className="container flex-vertical background">
      <Routes>
        <Route path="/" element={<Welcome name="Alessio" />} />
        <Route path="counter" element={<HookCounter />} />
        <Route path="users" element={<HookGitHubUser />} />
        <Route path="users/:username" element={<ShowGitHubUser />} />
        <Route
          path="*"
          element={
            <div className="flex-vertical panel">
              <img
                className="error404 glassmorph"
                alt="Error 404"
                src="https://http.dog/404.jpg"
              />
            </div>
          }
        />
      </Routes>
      <footer className="flex-horizontal glassmorph transparent">
        <div className="flex-horizontal">
          <Link className="linkButton accentColor glassmorph homeButton" to="/">
            Home
          </Link>
          <Link className="linkButton accentColor glassmorph" to="counter">
            Counter
          </Link>
          <Link className="linkButton accentColor glassmorph" to="users">
            Users
          </Link>
        </div>
      </footer>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
