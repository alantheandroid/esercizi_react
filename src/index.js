import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 && (
          <p>
            Your age is <strong>{this.props.age}</strong>
          </p>
        )}
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {!!this.props.age && this.props.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Alessio",
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome age={28} />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
