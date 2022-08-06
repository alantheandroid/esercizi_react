import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Counter({ initialValue = 0, incrementBy = 1, intervalAmount = 1000 }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + incrementBy);
    }, intervalAmount);

    return () => {
      clearInterval(timer);
    };
  }, [count, incrementBy, intervalAmount]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
