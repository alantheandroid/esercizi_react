import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <header>{this.props.title}</header>
        <article>{this.props.children}</article>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Container title={<h2>Lorem ipsum</h2>}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ut
          rem, natus sequi molestiae pariatur doloremque distinctio qui
          cupiditate tenetur error suscipit exercitationem velit voluptas illum
          sit corrupti? Voluptas, reprehenderit.
        </p>
      </Container>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
