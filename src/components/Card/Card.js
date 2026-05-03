import React from "react";
import "./Card.css";
import TechHolder from "./TechHolder";

export default function Card({
  className,
  itemId,
  title,
  desc,
  techStack,
  projectInfo,
  openPage,
  setActiveProj,
}) {
  const openWork = () => {
    setActiveProj(projectInfo);
    openPage(true);
  };

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

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openWork();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      data-interactive-project="true"
      className={`card ${className || ""}`}
      onClick={openWork}
      onKeyDown={onKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <h2 className="projName">{title}</h2>
        <div className="tech-used">
          {techStack.map((tech, index) => {
            return <TechHolder tech={tech} key={`${itemId}-${index}`} />;
          })}
        </div>
        <p className="proj-desc">{desc}</p>
      </div>
    </div>
  );
}
