import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/NavBar/Navbar";
import secretAudio from "./assets/secret_sound_2.mp3";
import Work from "./pages/Work/Work";
import { projects } from "./store/Store";
// import About from "./components/About/About";
import SkillCardFrontend from "./components/Card/SkillCardFrontend";
import SkillCardBackend from "./components/Card/SkillCardBackend";
import SkillCardDevops from "./components/Card/SkillCardDevops";
import ExpTimeline from "./components/Experience/ExpTimeline";
import StarBackgroundCanvas from "./components/StarBackground";

function App() {
  const [pageActive, setPageActve] = useState(false);
  const [activeProj, setActiveProj] = useState({});

  const mouseFollower = (cursor, trailer) => {
    window.onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      console.log();

      cursor.animate(
        {
          top: `${y - cursor.clientWidth / 2}px`,
          left: `${x - cursor.clientWidth / 2}px`,
        },
        { duration: 800, fill: "forwards" }
      );
      trailer.animate(
        {
          top: `${y - trailer.clientWidth / 2}px`,
          left: `${x - trailer.clientWidth / 2}px`,
        },
        { duration: 1600, fill: "forwards" }
      );
    };
  };

  const mouseGlow = (links, cursor, trailer) => {
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
        trailer.classList.add("growmore");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        trailer.classList.remove("growmore");
      });
    });
  };
  useEffect(() => {
    let links = Array.from(document.querySelectorAll(".link"));
    let cursor = document.querySelector(".cursor");
    let trailer = document.querySelector(".trailer");
    let cards = document.querySelectorAll(".card");
    let logo = document.querySelector(".nav-logo");

    logo.addEventListener("mouseover", (e) => {
      console.log("over and out!");
      document.querySelector(".secret-audio2").play();
    });
    logo.addEventListener("mouseleave", (e) => {
      console.log("over and out!");
      document.querySelector(".secret-audio2").pause();
    });

    mouseFollower(cursor, trailer);
    mouseGlow(links, cursor, trailer);

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        cursor.classList.add("point");
        trailer.classList.add("growmore");
      });
      card.addEventListener("mouseleave", () => {
        cursor.classList.remove("point");
        trailer.classList.remove("growmore");
      });
      card.addEventListener("click", () => {
        cursor.classList.remove("point");
        trailer.classList.remove("growmore");
      });
    });
  }, [pageActive]);

  // const openOld = () => {
  //   window.open(
  //     "https://chethan30.github.io/my-portfolio.github.io/",
  //     "_blank"
  //   );
  // };

  return (
    <div className="App">
      <StarBackgroundCanvas />
      <div className="navbar">
        <Navbar showLinks={pageActive} />
      </div>
      {!pageActive && (
        <div className="appContainer">
          <audio className="secret-audio2 growmore" src={secretAudio} />

          <div className="content2">
            {/* <---------- Introduction -----------> */}
            <Intro />

            {/* <---------- Aboutme and Resume -----------> */}
            <div className="about-container">
              {/* <div className="heading">About</div> */}
              {/* <About /> */}
            </div>

            {/* <---------- Experience -----------> */}
            <div className="experience-container" id="experience">
              <div className="heading">Experience</div>
              <ExpTimeline />
            </div>

            {/* <---------- Projects -----------> */}
            <div className="card-container" id="projects">
              <div className="heading-holder">
                <div className="heading">Projects</div>
              </div>
              <div className="card-grid">
                {projects.map((project, index) => {
                  return (
                    <Card
                      className="card-ele"
                      key={index}
                      itemId={project.key}
                      title={project.title}
                      desc={project.minidesc}
                      techStack={project.tech}
                      projectInfo={project}
                      openPage={setPageActve}
                      setActiveProj={setActiveProj}
                    />
                  );
                })}
              </div>
              <div className="heading-holder">
                <a
                  className="see-more link linkhover"
                  href="https://github.com/Chethan30"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            {/* <---------- Services/ Skills -----------> */}
            <div className="skills-container" id="skills">
              <div className="heading-holder">
                <div className="heading">Skills</div>
              </div>
              <div className="skills-grid">
                <SkillCardFrontend />
                <SkillCardDevops />
                <SkillCardBackend />
              </div>
            </div>
          </div>
        </div>
      )}

      {pageActive && (
        <Work
          title={"Page Title"}
          key={0}
          openPage={setPageActve}
          activeProj={activeProj}
        />
      )}

      {/* <---------- Footer -----------> */}
      <div className="footer-holder">
        <Footer showNav={pageActive} />
      </div>
      <div className="cursor">
        <i className="cursor-icon">🚀</i>
      </div>
      <div className="trailer"></div>

      {/* <Background /> */}
    </div>
  );
}

export default App;
