import { Link, Outlet } from "react-router-dom";

export default function Welcome({ name }) {
  return (
    <div className="container flex-vertical">
      <div className="flex-vertical">
        <h1 className="panel claymorph">
          Welcome,{" "}
          <span>
            <Link to="alantheandroid" className="accentColor bgClip">
              {name}
            </Link>
          </span>
          !👋
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
