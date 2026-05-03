import React from "react";
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
  MdOutlineSettingsRemote,
  MdSmartToy,
} from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";

const ExpTimeline = () => {
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

  return (
    <div className="exp-timeline-root">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="Sep 2024 — Present"
          iconStyle={iconStyle}
          icon={<MdSmartToy />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer II (AI Systems)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Iron Mountain{" "}
            <MdLocationOn className="content-icon" /> Tampa Bay, FL
          </h4>
          <p>
            AI/ML, Semantic Search Engine, Agentic Workflows and Frameworks,
            RAG, Golang, Systems Design, React, TypeScript, Python
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="Jul 2024 — Aug 2024"
          iconStyle={iconStyle}
          icon={<SiReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer (Fullstack)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Meta Jungle{" "}
            <MdLocationOn className="content-icon" /> Ozark, MO
          </h4>
          <p>
            React, TypeScript, Python, AWS, Jenkins, Webpack, Node.js, NFTs,
            Crypto
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="May 2023 — Jan 2024"
          iconStyle={iconStyle}
          icon={<SiAwsorganizations />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Veryable Inc{" "}
            <MdLocationOn className="content-icon" /> Dallas, TX
          </h4>
          <p>
            Typescript, Python, AWS, Lambda, Docker, Kubernetes, Terraform,
            Circle CI, Automation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="Aug 2022 — May 2024"
          iconStyle={iconStyle}
          icon={<GrCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters of Science in AI/ML
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" />
            University of Texas at Dallas
            <MdLocationOn className="content-icon" />
            Richardson, TX
          </h4>
          <p>
            Machine Learning, Deep Learning, LLM, Computer Vision, Natural
            Language Processing, Data Analytics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="Jul 2021 — Jan 2022"
          iconStyle={iconStyle}
          icon={<MdDeveloperBoard />}
        >
          <h3 className="vertical-timeline-element-title">
            DevSecOps Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Brane Enterprises{" "}
            <MdOutlineSettingsRemote className="content-icon" /> Bengaluru, IN
          </h4>
          <p>
            Python Scripting, Pen Testing, Linux, Jenkins, ArgoCD, Nmap,
            BurpSuite
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentStyle}
          contentArrowStyle={cardArrowStyle}
          date="May 2018 — Aug 2022"
          iconStyle={iconStyle}
          icon={<GrCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Engineering in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" />
            Dayananda Sagar College of Engineering
            <MdLocationOn className="content-icon" />
            Bengaluru, IN
          </h4>
          <p>AI/ML, Web Engineer, Logic Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ExpTimeline;
