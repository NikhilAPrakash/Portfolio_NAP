import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript / TypeScript", "SQL", "MATLAB"]
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "Scikit-learn",
      "PyTorch / TensorFlow",
      "Pandas / NumPy",
      "XGBoost / LightGBM",
      "Model Evaluation & MLOps"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Docker",
      "Git / GitHub",
      "Airflow",
      "DVC / MLflow",
      "Linux",
      "GCP / AWS (basic)"
    ]
  },
  {
    title: "Computer Vision & Robotics",
    skills: [
      "OpenCV",
      "LiDAR / SLAM",
      "ROS / ROS2",
      "GTSAM",
      "Gazebo / RViz"
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);

  // Fade in + fade out on scroll
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cards = sectionEl.querySelectorAll(".skills-card");

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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills-card">
            <h3 className="skills-card-title">{group.title}</h3>

            <div className="skills-chip-row">
              {group.skills.map((skill) => (
                <span key={skill} className="skills-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
