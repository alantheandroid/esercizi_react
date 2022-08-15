import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Welcome({ name }) {
  return (
    <div className="container">
      <p className="welcome">Welcome, {name}!</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Alessio" />} />
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
