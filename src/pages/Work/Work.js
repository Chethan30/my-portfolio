import React from "react";
import "./Work.css";
import backButton from "../../assets/backButton.png";
import TechHolder from "../../components/Card/TechHolder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Work({ openPage, activeProj }) {
  // const bttonLink = "https://icons8.com/icon/99287/back-arrow";

  const closePage = () => {
    openPage(false);
  };

  return (
    <div className="background-thingy">
      <div className="pageContainer">
        <div className="page-heading">
          <div className="back-button linkhover" onClick={closePage}>
            <img src={backButton} alt="" />
          </div>
          <div className="page-title">{activeProj.title}</div>
          {activeProj.links && (
            <div className="page-links">Links to project here</div>
          )}
        </div>

        <div className="page-content">
          <div className="tech-used">
            {activeProj.tech.map((tech, index) => {
              return <TechHolder tech={tech} key={index} />;
            })}
          </div>
          {activeProj.pictures && (
            <div className="page-pictures">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="swiper"
              >
                {activeProj.pictures.map((picture, index) => {
                  return (
                    <SwiperSlide className="swiper-slide">
                      <img src={picture} alt="lol" className="swiper-image" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}

          <div className="page-desc">{activeProj.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
