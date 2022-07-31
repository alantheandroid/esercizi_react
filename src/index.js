import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class TodoList extends React.Component {
  state = { items: ["navbar", "hero-section", "cards", "footer"], newItem: "" };

  _newItemRef = createRef();

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleInputChange = () => {
    this.setState({
      newItem: this._newItemRef.current.value,
    });
  };

  addListItem = () => {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: "",
    });
  };

  render() {
    const todo = this.state.items.map((item) => (
      <li key={item.toString()}>{item}</li>
    ));

    return (
      <div>
        <fieldset>
          <button name="reset" onClick={this.clearList}>
            Reset ❌
          </button>
          <ul>{todo}</ul>
        </fieldset>
        <input
          type={"text"}
          value={this.state.newItem}
          onChange={this.handleInputChange}
          ref={this._newItemRef}
          autoFocus
        ></input>
        <button
          name="add"
          onClick={this.addListItem}
          disabled={!this.state.newItem}
        >
          Add ➕
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
