import { useState } from "react";
import "../styles/NavBar.css";

export default function NavBar({ current, onNavigate }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "signup", label: "Sign Up" },
    { id: "contact", label: "Contact" },
    
  ];

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">Demo Site</div>

        <button className="menu-toggle" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => onNavigate(l.id)}
                className={`nav-button ${current === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="mobile-menu">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => {
                  onNavigate(l.id);
                  setOpen(false);
                }}
                className={`nav-button ${current === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
