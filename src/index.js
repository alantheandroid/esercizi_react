import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function FilteredList({ usersArray }) {
  const filteredList = useMemo(() => {
    return usersArray.filter((user) => user.age > 18);
  }, [usersArray]);

  const usersList = filteredList.map((user, index) => (
    <li key={user.name + index}>
      {user.name}, {user.age}
    </li>
  ));

  return <ul className="panel glassmorph">{usersList}</ul>;
}

function App() {
  const usersArray = [
    { name: "Alessio", id: 0, age: 28 },
    { name: "Anastassiya", id: 1, age: 17 },
    { name: "Andrea", id: 2, age: 27 },
    { name: "Emanuele", id: 3, age: 26 },
    { name: "Gianluigi", id: 4, age: 16 },
    { name: "Giorgio", id: 5, age: 25 },
    { name: "Pietro", id: 6, age: 24 },
  ];

  return (
    <div className="container flex-horizontal">
      <FilteredList usersArray={usersArray} />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
