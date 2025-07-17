import "../styles/navbar.css";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => handleScroll("home")}>
        Mohamed
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <ul className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <li>
          <button onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
