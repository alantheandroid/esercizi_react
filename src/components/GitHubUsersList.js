import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function GitHubUserList() {
  const [usersArray, setUsersArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("usersArray", usersArray);
  }, [usersArray]);

  function removeItem(removedItem) {
    const filteredArray = usersArray.filter((item) => item !== removedItem);
    setUsersArray([...filteredArray]);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  function handleUserAdd() {
    if (!usersArray.includes(inputValue)) {
      setUsersArray([...usersArray, inputValue]);
    }
  }

  const userList = usersArray.map((userItem, index) => (
    <div
      className="flex-horizontal glassmorph linkButton"
      key={userItem + index}
    >
      <div className="flex-horizontal">
        <Link to={userItem}>{userItem}</Link>
      </div>
      <div className="">
        <button className="" onClick={() => removeItem(userItem)}>
          ❌
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container background flex-vertical">
      <div className="flex-vertical">
        <div className="panel claymorph">
          <label className="flex-horizontal">
            Search for GitHub users:
            <input
              name="username"
              type={"search"}
              autoComplete="true"
              placeholder="alantheandroid"
              onChange={handleInputChange}
            />
            <button onClick={handleUserAdd}>➕</button>
          </label>
        </div>
        <div className="usersList flex-horizontal">{userList}</div>
        <Outlet />
      </div>
    </div>
  );
}
