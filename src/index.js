import React from "react";
import ReactDOM from "react-dom/client";
import HookGitHubUser from "./components/HookGitHubUser";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <div>
      <HookGitHubUser />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
