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
        <div className="role-row past">
          <span className="field-label">PREV ›</span>
          <span className="role-past-value">
            <span className="role-past">Software</span>
            {" · "}
            <span className="role-past">Interface</span>
            {" · "}
            <span className="role-past">Platform</span>
            {" Engineer"}
          </span>
        </div>
      </div>

      <p className="myintro-text myintro-con">
        <span className="intro-comment">{"// BRIEFING  "}</span>
        Navigates simplicity, scalability, cloud infrastructure, streamlined
        pipelines, and agile configurations. Jack of all trades.
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
