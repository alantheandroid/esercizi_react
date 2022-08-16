import useCounter from "../hooks/useCounter";

export default function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div className="background container flex-vertical">
      <div className="flex-vertical">
        <h1 className="panel glassmorph flex-horizontal fill">
          Count: <span className="accentColor">{counter}</span>
        </h1>
        <div className="flex-horizontal">
          <button className="round glassmorph" onClick={onIncrement}>
            ➕
          </button>
          <button className="round glassmorph" onClick={onDecrement}>
            ➖
          </button>
          <button className="panel glassmorph resetButton" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
