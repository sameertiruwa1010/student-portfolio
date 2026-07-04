import "./../css/skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <p className="section-desc">
        Technologies and tools I use to design, develop, and deploy modern web applications.
      </p>

      <div className="skills-container">

        {/* UI/UX */}
        <div className="skill-card">
          <h3>🎨 UI / UX</h3>

          <div className="skill-tags">
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Canva</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <h3>💻 Frontend</h3>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>React</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>⚙️ Backend</h3>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
            <span>JWT</span>
          </div>
        </div>

        {/* DevOps */}
        <div className="skill-card">
          <h3>☁️ DevOps</h3>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Linux</span>
            <span>Docker</span>
            <span>GitHub Actions</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;
