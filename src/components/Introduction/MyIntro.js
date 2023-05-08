import React from "react";
import "./MyIntro.css";

function MyIntro() {
  return (
    <div className="myinrto-container">
      <h1 className="myintro-text">
        Hey, I'm <span className="magic">Chethan</span>!
      </h1>
      <h3>Write something fancy here!</h3>
      <button className="fancyButton">
        Fancy Button here that glows on hover
      </button>
    </div>
  );
}

export default MyIntro;
