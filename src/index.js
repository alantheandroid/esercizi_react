import React, { useContext, useState } from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const LanguageContext = createContext("English");

const Languages = {
  English: { CURRENT_LANGUAGE: "Current language is: " },
  Italiano: { CURRENT_LANGUAGE: "La lingua corrente è: " },
};

function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div className="languageDisplay">
      <p>{Languages[language].CURRENT_LANGUAGE}</p>
      <h1>{language}</h1>
    </div>
  );
}

function App() {
  const [langSelect, setLangSelect] = useState("English");

  function handleLanguageChange(event) {
    setLangSelect(event.target.value);
  }

  return (
    <div>
      <select value={langSelect} onChange={handleLanguageChange}>
        <option value={"English"}>English</option>
        <option value={"Italiano"}>Italiano</option>
      </select>
      <LanguageContext.Provider value={langSelect}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
