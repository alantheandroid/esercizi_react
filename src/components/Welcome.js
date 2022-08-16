export default function Welcome({ name }) {
  return (
    <div className="background container flex-vertical">
      <h1 className="panel glassmorph">
        Welcome, <span className="accentColor">{name}</span>!
      </h1>
    </div>
  );
}
