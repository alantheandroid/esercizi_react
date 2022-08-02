import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class TodoList extends React.Component {
  state = { items: ["navbar", "hero-section", "cards", "footer"], newItem: "" };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleInputChange = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  addListItem = () => {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: "",
    });
  };

  removeListItem = (removedItem) => {
    const filteredArray = this.state.items.filter(
      (item) => item !== removedItem
    );

    this.setState({
      items: [...filteredArray],
    });
  };

  render() {
    return (
      <div className="container">
        <fieldset>
          {this.props.render(this.state.items, this.removeListItem)}
          <button name="reset" onClick={this.clearList}>
            Reset ❌
          </button>
        </fieldset>
        <label>
          <input
            type={"text"}
            value={this.state.newItem}
            onChange={this.handleInputChange}
            autoFocus
          ></input>
          <button
            name="add"
            onClick={this.addListItem}
            disabled={!this.state.newItem}
          >
            add ➕
          </button>
        </label>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <TodoList
        render={(items, removeFunction) => {
          const todo = items.map((item) => (
            <li key={item.toString()}>
              <p>
                {item}
                <button
                  name="remove"
                  onClick={() => {
                    removeFunction(item);
                  }}
                >
                  remove
                </button>
              </p>
            </li>
          ));

          return <ul>{todo}</ul>;
        }}
      ></TodoList>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
