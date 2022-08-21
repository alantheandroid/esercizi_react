import { useParams } from "react-router-dom";
import useGitHubUser from "../hooks/useGitHubUser";

export default function HookGitHubUser() {
  const { username } = useParams();
  const { data, error, loading, onDataFetch } = useGitHubUser(username);

  function handleFetchUserData() {
    onDataFetch();
  }

  return (
    <div className="flex-vertical">
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
        <div className="fill flex-vertical panel claymorph">
          <button className="refreshButton" onClick={handleFetchUserData}>
            🔁
          </button>
          <img
            className="round profilePicture"
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
