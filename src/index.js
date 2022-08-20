import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./index.css";
import Welcome from "./components/Welcome";
import HookCounter from "./components/HookCounter";
import ShowGitHubUser from "./components/ShowGitHubUser";
import NotFound from "./components/NotFound";
import GitHubUserList from "./components/GitHubUsersList";
import HookGitHubUser from "./components/HookGitHubUser";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <div className="container flex-vertical background">
      <Routes>
        <Route path="/" element={<Welcome name="Alessio" />}>
          <Route path=":username" element={<HookGitHubUser />} />
        </Route>
        <Route path="counter" element={<HookCounter />} />
        <Route path="users" element={<GitHubUserList />}>
          <Route
            index
            element={
              <p className="panel glassmorph alert">
                <i>Add a user and select it!</i> ⬆️
              </p>
            }
          />
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="flex-horizontal glassmorph transparent">
        <div className="flex-horizontal">
          <Link className="linkButton accentColor glassmorph homeButton" to="/">
            🏠 Home
          </Link>
          <Link className="linkButton accentColor glassmorph" to="counter">
            🔢 Counter
          </Link>
          <Link className="linkButton accentColor glassmorph" to="users">
            🧑 Users
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
