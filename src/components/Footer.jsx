import "./../css/footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>Student Portfolio</h2>

        <p>
          Building modern web applications with creativity,
          continuous learning, and clean code.
        </p>

        <div className="footer-social">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="footer-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Student Portfolio. All Rights Reserved.
        </p>

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;
