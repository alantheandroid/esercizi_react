import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const LanguageContext = createContext("English");

const Languages = {
  English: { CURRENT_LANGUAGE: "Current language is: " },
  Italiano: { CURRENT_LANGUAGE: "La lingua corrente è: " },
};
class DisplayLanguage extends React.Component {
  state = {};

  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div className="languageDisplay">
              <p>{Languages[language].CURRENT_LANGUAGE}</p>
              <h1>{language}</h1>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

class App extends React.Component {
  state = {
    lang: "English",
  };

  handleLanguageChange = (event) => {
    this.setState({
      lang: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.lang} onChange={this.handleLanguageChange}>
          <option value="English">English</option>
          <option value="Italiano">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.lang}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
