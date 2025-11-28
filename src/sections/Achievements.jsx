import React, { useEffect, useRef } from "react";
import "./Achievements.css";

// Add your real Coursera / Udemy certs here
const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera · Andrew Ng",
    year: "2024",
    link: "https://coursera.org/verify/XXXX",
    skills: ["Supervised Learning", "Regularization", "Logistic Regression"],
  },
  {
    title: "Deep Learning with PyTorch",
    issuer: "Udemy",
    year: "2023",
    link: "https://udemy.com/certificate/XXXX",
    skills: ["PyTorch", "CNNs", "Training Pipelines"],
  },
  // add more certifications here
];

const Achievements = () => {
  const sectionRef = useRef(null);

  // Fade in / fade out on scroll
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cards = sectionEl.querySelectorAll(".ach-card");

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
    <section id="achievements" className="ach-section" ref={sectionRef}>
      <h2 className="ach-heading">Achievements &amp; Certifications</h2>

      <h3 className="ach-subheading">Certifications</h3>
      <div className="ach-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="ach-card">
            <h4 className="ach-title">{cert.title}</h4>
            <p className="ach-meta">
              {cert.issuer} · {cert.year}
            </p>

            {cert.skills && (
              <div className="ach-chip-row">
                {cert.skills.map((s) => (
                  <span key={s} className="ach-chip">
                    {s}
                  </span>
                ))}
              </div>
            )}

            {cert.link && (
              <a
                className="ach-link-btn"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                View certificate
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
