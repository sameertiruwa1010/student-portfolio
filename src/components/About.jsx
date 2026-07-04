import "./../css/about.css";
import profile from "../assets/aboutme.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={profile} alt="Profile" />
      </div>

      <div className="about-content">

        <h2>About Me</h2>

        <p>
          Hello! I'm <strong>Sameer Tiruwa</strong>, an enthusiastic IT student who
          enjoys creating user-friendly websites, learning modern technologies,
          and solving real-world problems through software development.
        </p>

        <p>
          My interests include UI/UX Design, Frontend Development,
          Backend Development, DevOps, and Cloud Computing. I enjoy
          continuous learning and building practical projects.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>🎓 Education</h3>
            <p>Bachelor in Information Technology</p>
          </div>

          <div className="card">
            <h3>📍 Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="card">
            <h3>💼 Experience</h3>
            <p>Student & Open Source Learner</p>
          </div>

          <div className="card">
            <h3>🎯 Goal</h3>
            <p>Become a Full Stack & DevOps Engineer</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
