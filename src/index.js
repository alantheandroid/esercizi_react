import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function useGitHubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("user", json);
        setLoading(false);
        setData(json);
      });
  }, [username]);

  return {
    data: data,
    loading: loading,
  };
}

function HookGitHubUser({ username = "alantheandroid" }) {
  const { data, loading } = useGitHubUser(username);

  return (
    <div className="container">
      {loading && (
        <div className="container panel">
          <p>
            <i>Loading</i> ⏳
          </p>
        </div>
      )}
      {data && (
        <div className="container panel">
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
