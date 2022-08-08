import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGitHubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      if (response.status !== 200) {
        throw new Error("User not found");
      }
      setData(json);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return (
    <div>
      {loading && (
        <div>
          <p>
            <i>Loading</i> ⏳
          </p>
        </div>
      )}
      {error && <p>User not found! 🤷</p>}
      {data && (
        <div className="flex-horizontal userData">
          <img className="profilePicture" alt="user" src={data.avatar_url} />
          <div className="flex-vertical">
            <h1>{data.name}</h1>
            <p>
              <i>{data.bio}</i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function GitHubUserList() {
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
    <div className="userItem flex-horizontal panel" key={userItem + index}>
      <div>
        <GitHubUser username={userItem} />
      </div>
      <div className="">
        <button className="remove-item" onClick={() => removeItem(userItem)}>
          ✖️
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container background flex-vertical">
      <div className="panel">
        <label>
          Search for GitHub users
          <div className="inputField">
            <input
              name="username"
              type={"search"}
              autoComplete="true"
              placeholder="alantheandroid"
              onChange={handleInputChange}
            />
            <button onClick={handleUserAdd}>➕</button>
          </div>
        </label>
      </div>
      <div className="usersList flex-vertical">{userList}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <GitHubUserList />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
