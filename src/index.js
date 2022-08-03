import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const LanguageContext = createContext("en");

class DisplayLanguage extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <select value={this.state.language} onChange={this.handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
    );
  }
}

class App extends React.Component {
  state = {};

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
