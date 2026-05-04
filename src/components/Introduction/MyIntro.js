import React from "react";
import "./MyIntro.css";

function MyIntro() {
  const openResumeHandler = () => {
    window.open(
      "https://drive.google.com/file/d/1n16er9agEKlUsO_5vNTdkUuqEroEpSB5/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="myinrto-container">

      <div className="login-status">
        <span className="status-dot" />
        <span className="status-text">SESSION ESTABLISHED · OPERATOR PROFILE LOADED</span>
      </div>

      <h1 className="myintro-text">
        <span className="intro-prefix">OPERATOR // </span>
        <span className="magic">Chethan Birur Nataraja</span>
      </h1>

      <div className="role-block">
        <div className="role-row current">
          <span className="field-label">ROLE ›</span>
          <span className="magic-blue">Software Engineer II</span>
          <span className="role-tag">AI SYSTEMS</span>
        </div>
      </div>

      <p className="myintro-text myintro-con">
        <span className="intro-comment">{"// BRIEFING  "}</span>
        Ships semantic search, RAG-style retrieval, and agentic workflows on
        enterprise platforms—full-stack delivery in Go, React, TypeScript,
        and Python when the problem needs it.
      </p>

      <button className="fancyButton" onClick={openResumeHandler}>
        <span className="btn-corner tl" />
        <span className="btn-corner tr" />
        <span className="btn-corner bl" />
        <span className="btn-corner br" />
        <span className="magic">ACCESS DOSSIER</span>
      </button>

    </div>
  );
}

export default MyIntro;
