import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

class CounterDisplay extends React.Component {
  render() {
    return <h1>Count: {this.props.count}</h1>;
  }
}

class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementAmount,
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          initialValue={0}
          incrementInterval={1000}
          incrementAmount={1}
        />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
