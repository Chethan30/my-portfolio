import React from "react";
import "./SkillCard.css";

/**
 * One skill category panel — driven by skillsSections data.
 */
export default function SkillSection({ sectionId, title, skills }) {
  const headingId = `skill-heading-${sectionId}`;

  return (
    <section
      className="skills-card"
      aria-labelledby={headingId}
    >
      <h3 className="skill-heading" id={headingId}>
        {title}
      </h3>
      <div className="skills-card-content">
        {skills.map(({ name, Icon }) => (
          <div key={name} className="skill">
            {Icon ? (
              <span className="skill-icon-wrap" aria-hidden>
                <Icon />
              </span>
            ) : null}
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
