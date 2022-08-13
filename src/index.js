import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function CarDetails({ initialData }) {
  const formRef = useRef();
  const [data, setData] = useState({ initialData });

  function handleFormSubmit(event) {
    event.preventDefault();

    const newData = {
      brand: formRef.current.elements.brand.value,
      model: formRef.current.elements.model.value,
      year: formRef.current.elements.year.value,
      color: formRef.current.elements.color.value,
    };

    setData(newData);
  }

  useEffect(() => {
    formRef.current.focus();
  }, []);
  useEffect(() => setData(initialData), [initialData]);
  useEffect(() => console.log("data", data));

  return (
    <div className="panel">
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <fieldset className="flex-vertical panel claymorph">
          <legend className="panel claymorph">Car details</legend>
          <label className="flex-horizontal formItem">
            Brand
            <input
              type="text"
              name="brand"
              defaultValue={initialData.brand}
            ></input>
          </label>
          <label className="flex-horizontal formItem">
            Model
            <input
              type="text"
              name="model"
              defaultValue={initialData.model}
            ></input>
          </label>
          <label className="flex-horizontal formItem">
            Year
            <input
              type="text"
              name="year"
              defaultValue={initialData.year}
            ></input>
          </label>
          <label className="flex-horizontal formItem">
            Color
            <input
              type="text"
              name="color"
              defaultValue={initialData.color}
            ></input>
          </label>
          <div className="panel">
            <button className="loginButton" type="submit" name="login">
              Submit
            </button>
          </div>
          <button
            className="panel resetButton claymorph"
            type="reset"
            name="reset"
          >
            Reset to default
          </button>
        </fieldset>
      </form>
    </div>
  );
}

function App() {
  const initialData = {
    brand: "BMW",
    model: "M3",
    year: "2019",
    color: "Red",
  };

  return (
    <div className="container flex-vertical">
      <CarDetails initialData={initialData} />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
