import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowGitHubUser() {
  const { username } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

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

  return (
    <div className="background container flex-vertical">
      {loading && (
        <div className="panel claymorph">
          <p>
            <i>Loading</i> ⏳
          </p>
        </div>
      )}
      {error && (
        <div className="panel claymorph">
          <p>User not found! 🤷</p>
        </div>
      )}
      {data && (
        <div className="flex-vertical panel claymorph">
          <img
            className="panel round profilePicture"
            alt="user"
            src={data.avatar_url}
          />
          <h1 className="accentColor">{data.name}</h1>
          <p>
            <i>{data.bio}</i>
          </p>
        </div>
      )}
    </div>
  );
}
