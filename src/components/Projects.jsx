import "./../css/projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <p className="project-desc">
        Here are some projects that demonstrate my skills in UI/UX, Full Stack Development, and DevOps.
      </p>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-image">
            Blood Donation System
          </div>

          <div className="project-content">

            <h3>Blood Donation Platform</h3>

            <p>
              A full-stack blood donation platform where donors,
              volunteers, and organizations can connect efficiently.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-image">
            Student Portfolio
          </div>

          <div className="project-content">

            <h3>Personal Portfolio</h3>

            <p>
              A modern responsive portfolio website built using
              React to showcase skills, projects, and achievements.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>GitHub Pages</span>
            </div>

            <div className="project-buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <div className="project-image">
            DevOps Lab
          </div>

          <div className="project-content">

            <h3>GitHub Actions Demo</h3>

            <p>
              CI/CD pipeline using GitHub Actions to automatically
              build and deploy a React application.
            </p>

            <div className="tech-stack">
              <span>GitHub</span>
              <span>Actions</span>
              <span>Docker</span>
            </div>

            <div className="project-buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
