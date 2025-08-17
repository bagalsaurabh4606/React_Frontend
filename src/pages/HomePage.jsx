import UserCard from "../components/UserCard";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome 👋</h1>
        <p>
          This mini app demonstrates three tasks: a Sign-Up form, a responsive NavBar, 
          and a reusable UserCard.
        </p>
      </section>

      {/* User Cards Section */}
      <section className="cards-section">
        <h2>Meet Our Users</h2>
        <div className="user-grid">
          <UserCard name="Saurabh Bagal" email="saurabh@example.com" />
          <UserCard name="Shreyas Patil" email="shreyas@email.com" />
          <UserCard name="Tejas Nikam" email="tejas@email.com" />
          <UserCard name="Mahesh Shirsat" email="mahesh@email.com" />
        </div>
      </section>
    </div>
  );
}
