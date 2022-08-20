import { useParams } from "react-router-dom";
import useGitHubUser from "../hooks/useGitHubUser";

export default function HookGitHubUser() {
  const { username } = useParams();
  const { data, error, isloading } = useGitHubUser(username);

  return (
    <div className="flex-vertical">
      {isloading && (
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
