import "../styles/UserCard.css";

export default function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <div className="avatar">{name?.[0]?.toUpperCase() || "U"}</div>
      <div>
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
}
