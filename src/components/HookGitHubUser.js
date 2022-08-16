import useGitHubUser from "../hooks/useGitHubUser";

export default function HookGitHubUser() {
  const { data, loading, error, onInputChange, onUserFetch } = useGitHubUser();

  return (
    <div className="container flex-vertical">
      <div className="flex-vertical">
        <div className="panel claymorph">
          <label className="flex-horizontal">
            Search for GitHub users:
            <input
              placeholder="alantheandroid"
              onChange={onInputChange}
            ></input>
            <button onClick={onUserFetch}>➕</button>
          </label>
        </div>
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
    </div>
  );
}
