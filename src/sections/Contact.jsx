import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );

    window.location.href = `mailto:nikhilanilprakash@gmail.com?subject=${subject}&body=${body}`;
  };

  // Fade in / fade out on scroll
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cards = sectionEl.querySelectorAll(
      ".contact-info-card, .contact-form-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2 className="contact-heading">Contact</h2>

      <div className="contact-grid">
        {/* Left column */}
        <div className="contact-info-card">
          <h3 className="contact-subtitle">Let’s build something</h3>
          <p className="contact-text">
            I’m open to opportunities in machine learning, computer vision,
            robotics, and full-stack development. If you’d like to talk about a
            role, collaboration, or a project idea, feel free to reach out.
          </p>

          <div className="contact-detail-row">
            <span className="contact-label">Email</span>
            <a
              href="mailto:nikhilanilprakash@gmail.com"
              className="contact-link"
            >
              nikhilanilprakash@gmail.com
            </a>
          </div>

          <div className="contact-detail-row">
            <span className="contact-label">Location</span>
            <span className="contact-value">Boston, MA · USA</span>
          </div>

          <div className="contact-socials">
            <span className="contact-label">Links</span>
            <div className="contact-social-links">
              <a
                href="https://www.linkedin.com/in/nikhilanilprakash/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/NikhilAPrakash"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="/docs/NikhilAnilPrakash_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <div className="contact-form-card">
          <h3 className="contact-subtitle">Send a message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send message
            </button>

            <p className="contact-note">
              This will open your email client with a pre-filled message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
