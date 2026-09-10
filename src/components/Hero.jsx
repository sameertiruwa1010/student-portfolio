import "./../css/hero.css";
import profile from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h3>Hello 👋</h3>

        <h1>
          I'm <span>SAMEER</span>
        </h1>

        <h2>
          Student | UI/UX Designer | MERN Developer | DevOps Learner
        </h2>

        <p>
          Passionate IT student who enjoys designing beautiful interfaces,
          developing web applications, and exploring DevOps and cloud technologies.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Download CV
          </button>

          <button className="btn-secondary">
            Contact Me
          </button>
        </div>

        <div className="social-icons">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;
