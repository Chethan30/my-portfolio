import React from "react";
import MyIntro from "./MyIntro";
import RadarRing from "./RadarRing";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro-container" id="about">
      {/* Section corner brackets */}
      <span className="sec-corner tl" /><span className="sec-corner tr" />
      <span className="sec-corner bl" /><span className="sec-corner br" />

      {/* Tick-mark bottom strip */}
      <div className="tick-strip" />

      <div className="intro-left">
        <MyIntro />
      </div>

      <div className="intro-right-active">
        <div className="character-wrap float">
          <RadarRing />
          <img
            src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_46.png"
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
