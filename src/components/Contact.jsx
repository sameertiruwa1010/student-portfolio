import "./../css/contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-desc">
        Have a project, collaboration, or opportunity? Feel free to reach out.
      </p>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>sameertiruwa@outlook.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>+977 9848314015</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="social-links">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
