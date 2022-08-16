export default function Welcome({ name }) {
  return (
    <div className="container flex-vertical">
      <h1 className="panel claymorph">
        Welcome, <span className="accentColor">{name}</span>!
      </h1>
    </div>
  );
}
