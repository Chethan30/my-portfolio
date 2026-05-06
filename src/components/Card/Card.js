import React, { useState } from "react";
import "./Card.css";
import TechHolder from "./TechHolder";

export default function Card({
  className,
  itemId,
  period,
  title,
  desc,
  details,
  highlights = [],
  techStack,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--dot-parallax-x", `${nx * 36}px`);
    el.style.setProperty("--dot-parallax-y", `${ny * 36}px`);
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.removeProperty("--dot-parallax-x");
    el.style.removeProperty("--dot-parallax-y");
  };

  const toggleExpanded = () => setExpanded((v) => !v);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpanded();
    }
  };

  const panelId = `project-details-${itemId}`;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls={panelId}
      data-interactive-project="true"
      className={`card ${expanded ? "is-expanded" : ""} ${className || ""}`}
      onClick={toggleExpanded}
      onKeyDown={onKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        {period ? <p className="proj-period">{period}</p> : null}
        <h2 className="projName">{title}</h2>
        <div className="tech-used">
          {techStack.map((tech, index) => {
            return <TechHolder tech={tech} key={`${itemId}-${index}`} />;
          })}
        </div>
        <p className="proj-desc">{desc}</p>
        <div className="proj-expand-row" aria-hidden="true">
          <span className="proj-expand-label">Details</span>
          <span
            className={`proj-expand-chevron ${
              expanded ? "proj-expand-chevron--open" : ""
            }`}
          >
            ▼
          </span>
        </div>
        <div
          id={panelId}
          className={`proj-details-panel ${
            expanded ? "proj-details-panel--open" : ""
          }`}
        >
          {details ? <p className="proj-details-summary">{details}</p> : null}
          {highlights.length > 0 ? (
            <ul className="proj-details-bullets">
              {highlights.map((point, idx) => (
                <li key={`${itemId}-highlight-${idx}`}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
