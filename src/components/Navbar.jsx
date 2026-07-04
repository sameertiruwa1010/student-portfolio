import "./../css/navbar.css";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Student<span>Portfolio</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Blog</a></li>

      </ul>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        <FaGithub />
        GitHub
      </a>
    </nav>
  );
}

export default Navbar;
