import React from "react";
import "./MyIntro.css";

function MyIntro() {

  const openResumeHandler = () => {
    window.open('https://drive.google.com/file/d/1joZuaRM6V1pWxYdwqVEaDQty7DfTZaQI/view', '_blank');
  }

  return (
    <div className="myinrto-container">
      <h1 className="myintro-text">
        Hey, I'm <span className="magic">Chethan</span>!
      </h1>
      <h3>A cutting-edge software engineer at <a href="https://www.veryableops.com/">Veryable Inc.</a>, passionately delving into the realms of scalability, cloud infrastructure, streamlined pipelines, and agile configurations.
      <br/><br/> I'm passionate about working on projects and products that have a positive outcome on the intended userbase. <br/> <br/> <span className="pc-extra">Looking for a driven, determined individual who owns his problem solving abilities and easy going yet skilled nature ?</span></h3>
      <button className="fancyButton" onClick={openResumeHandler}>
        Checkout my resume here
      </button>
    </div>
  );
}

export default MyIntro;
