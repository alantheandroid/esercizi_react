import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HookCounter from "./components/HookCounter";
import Welcome from "./components/Welcome";
import HookGitHubUser from "./components/HookGitHubUser";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Alessio" />} />
      <Route path="counter" element={<HookCounter />} />
      <Route path="users/" element={<HookGitHubUser />} />
    </Routes>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
