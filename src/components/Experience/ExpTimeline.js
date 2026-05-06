import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./ExpTimeline.css";
import { GrCertificate } from "react-icons/gr";
import { SiAwsorganizations, SiReact } from "react-icons/si";
import {
  MdDeveloperBoard,
  MdLocationOn,
  MdSmartToy,
} from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { EXPERIENCE_TIMELINE } from "../../data/experienceTimeline";

const ICON_MAP = {
  smartToy: MdSmartToy,
  react: SiReact,
  aws: SiAwsorganizations,
  cert: GrCertificate,
  board: MdDeveloperBoard,
};

const ExpTimeline = () => {
  const [expandedId, setExpandedId] = useState(null);

  const iconStyle = {
    background: "rgba(0, 0, 0, 0.88)",
    color: "rgba(255, 200, 80, 0.95)",
    boxShadow: "0 0 0 1px rgba(255, 200, 80, 0.35)",
    border: "none",
  };
  const cardContentStyle = {
    background: "rgba(0, 0, 0, 0.45)",
    color: "#e8eeff",
    border: "1px solid rgba(255, 200, 80, 0.22)",
    boxShadow: "none",
    backdropFilter: "blur(6px)",
  };
  const cardArrowStyle = {
    borderRight: "7px solid rgba(255, 200, 80, 0.22)",
  };

  const toggle = (id) => {
    setExpandedId((cur) => (cur === id ? null : id));
  };

  return (
    <div className="exp-timeline-root">
      <VerticalTimeline>
        {EXPERIENCE_TIMELINE.map((entry) => {
          const IconComponent = ICON_MAP[entry.icon] || MdSmartToy;
          const hasDetails = Boolean(entry.details);
          const isOpen = expandedId === entry.id;
          const panelId = `exp-expand-${entry.id}`;

          const interactiveProps = hasDetails
            ? {
                className: `exp-entry exp-entry--interactive${
                  isOpen ? " exp-entry--open" : ""
                }`,
                onClick: () => toggle(entry.id),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(entry.id);
                  }
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": isOpen,
                "aria-controls": panelId,
                "aria-label": `${isOpen ? "Collapse" : "Expand"} details for ${entry.title}`,
              }
            : {
                className: "exp-entry",
              };

          return (
            <VerticalTimelineElement
              key={entry.id}
              className="vertical-timeline-element--work"
              contentStyle={cardContentStyle}
              contentArrowStyle={cardArrowStyle}
              date={entry.date}
              iconStyle={iconStyle}
              icon={<IconComponent />}
            >
              <div {...interactiveProps}>
                <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <CgOrganisation className="content-icon" /> {entry.org}{" "}
                  <MdLocationOn className="content-icon" /> {entry.location}
                </h4>
                <p className="exp-preview">{entry.preview}</p>
                {hasDetails && entry.details && (
                  <>
                    <div className="exp-expand-row" aria-hidden="true">
                      <span className="exp-expand-label">Details</span>
                      <span
                        className={`exp-expand-chevron${
                          isOpen ? " exp-expand-chevron--open" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                    <div
                      id={panelId}
                      className={`exp-details-panel${
                        isOpen ? " exp-details-panel--open" : ""
                      }`}
                    >
                      <div className="exp-details-inner">
                        {entry.details.summary ? (
                          <p className="exp-details-summary">
                            {entry.details.summary}
                          </p>
                        ) : null}
                        {entry.details.bullets &&
                        entry.details.bullets.length > 0 ? (
                          <ul className="exp-details-bullets">
                            {entry.details.bullets.map((item, idx) => (
                              <li key={`${entry.id}-${idx}`}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ExpTimeline;
