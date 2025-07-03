import "../styles/navbar.css";

import React from "react";

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleScroll("home")}>Home</button>
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
