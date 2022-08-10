import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function useGitHubUser() {
  const [inputValue, setInputValue] = useState("");
  const [fetchingUser, setUserFetch] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  function handleFetchUser() {
    setUserFetch(inputValue);
  }

  useEffect(() => {
    if (fetchingUser !== "") {
      fetchGitHubUser(fetchingUser);
    }
  }, [fetchingUser]);

  async function fetchGitHubUser(username) {
    setData(null);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      if (response.status !== 200) {
        throw new Error("User not found");
      }
      setData(json);
      console.log("json", json);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    data: data,
    loading: loading,
    error: error,
    onInputChange: handleInputChange,
    onUserFetch: handleFetchUser,
  };
}

function HookGitHubUser() {
  const { data, loading, error, onInputChange, onUserFetch } = useGitHubUser();

  return (
    <div className="background container flex-vertical">
      <div className="panel glassmorph">
        <label className="flex-horizontal">
          Search for GitHub users:
          <input placeholder="alantheandroid" onChange={onInputChange}></input>
          <button onClick={onUserFetch}>➕</button>
        </label>
      </div>
      {loading && (
        <div className="panel glassmorph">
          <p>
            <i>Loading</i> ⏳
          </p>
        </div>
      )}
      {error && (
        <div className="panel glassmorph">
          <p>User not found! 🤷</p>
        </div>
      )}
      {data && (
        <div className="flex-vertical panel glassmorph">
          <img className="profilePicture" alt="user" src={data.avatar_url} />
          <h1>{data.name}</h1>
          <p>
            <i>{data.bio}</i>
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <HookGitHubUser />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
