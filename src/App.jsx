import { useState } from "react";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignUp from "./components/SignUp";

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="app-container">
      <NavBar current={route} onNavigate={setRoute} />

      <main className="main-content">
        {route === "home" && <HomePage />}
        {route === "about" && <AboutPage />}
        {route === "contact" && <ContactPage />}
        {route === "signup" && <SignUp />}
      </main>

      <footer className="footer">
        <p>© 2023 Demo Site. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/bagalsaurabh4606" target="_blank" rel="noopener noreferrer">
            Saurabh Bagal
          </a>
        </p>
      </footer>
    </div>
  );
}
