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
      <h1 className="myintro-text">
        Hi, I am <span className="magic">Chethan Birur Nataraja</span>.
      </h1>
      <h3 className="myintro-text myintro-sub">
        Jack of all trades. Some of the cards i've previously dealt with
        include, <span className="magic-blue">Software</span>
        {" , "}
        <span className="magic-blue">Interface</span>, and{" "}
        <span className="magic-blue">Platform</span> Engineer.
      </h3>
      <p className=" myintro-text myintro-con">
        I passionately delve into the realms of simplicity, scalability, cloud
        infrastructure, streamlined pipelines, and agile configurations.
      </p>
      {/* <h3>A cutting-edge software engineer currently at <a href="https://www.veryableops.com/">Veryable Inc.</a>, passionately delving into the realms of scalability, cloud infrastructure, streamlined pipelines, and agile configurations.</h3> */}
      <button className="fancyButton" onClick={openResumeHandler}>
        <span className="magic">Resume</span>
      </button>
    </div>
  );
}

export default MyIntro;
