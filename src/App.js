import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Navbar from "./components/NavBar/Navbar";
import Starfield from "./components/Introduction/Starfield";
import HudControls from "./components/HudControls/HudControls";
import ambientMusic from "./assets/secret_sound.mp3";
import sfxChannel from "./assets/secret_sound_2.mp3";
import Work from "./pages/Work/Work";
import { projects } from "./store/Store";
// import About from "./components/About/About";
import SkillSection from "./components/Card/SkillSection";
import { SKILL_SECTIONS } from "./data/skillsSections";
import ExpTimeline from "./components/Experience/ExpTimeline";

function App() {
  const [pageActive, setPageActve] = useState(false);
  const [activeProj, setActiveProj] = useState({});
  const [musicOn, setMusicOn] = useState(false);
  const [sfxOn, setSfxOn] = useState(true);
  const [navDockVisible, setNavDockVisible] = useState(true);
  const musicRef = useRef(null);
  const sfxRef = useRef(null);

  const mouseFollower = (cursor, trailer) => {
    window.onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

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
    let cards = document.querySelectorAll('[data-interactive-project="true"]');

    // logo.addEventListener("mouseover", (e) => {
    //   console.log("over and out!");
    //   document.querySelector(".secret-audio2").play();
    // });
    // logo.addEventListener("mouseleave", (e) => {
    //   console.log("over and out!");
    //   document.querySelector(".secret-audio2").pause();
    // });

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

  useEffect(() => {
    if (pageActive) return;
    const el = musicRef.current;
    if (!el) return;
    el.volume = 0.35;
    if (musicOn) {
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      el.pause();
    }
  }, [musicOn, pageActive]);

  useEffect(() => {
    if (pageActive) return;
    const el = sfxRef.current;
    if (!el) return;
    el.muted = !sfxOn;
  }, [sfxOn, pageActive]);

  const missionHudHead = (
    <>
      <span className="hud-label">MISSION CONTROL // ONLINE</span>
      <span className="hud-coords">LOGGED IN AS · CBN-7734</span>
    </>
  );

  return (
    <div className="App">
      <Starfield />
      {pageActive ? (
        <div className="hud-corner hud-tl">{missionHudHead}</div>
      ) : (
        <div className="hud-mission-row">
          <div className="hud-mission-left">{missionHudHead}</div>
          <HudControls
            musicOn={musicOn}
            onMusicToggle={() => setMusicOn((v) => !v)}
            sfxOn={sfxOn}
            onSfxToggle={() => setSfxOn((v) => !v)}
            navVisible={navDockVisible}
            onNavToggle={() => setNavDockVisible((v) => !v)}
          />
        </div>
      )}
      <div className="hud-corner hud-br">
        <span className="hud-label">SECTOR: ENGINEERING</span>
        <span className="hud-coords">CLEARANCE: FULL ACCESS</span>
      </div>
      <Navbar
        showLinks={pageActive}
        dockVisible={navDockVisible}
      />
      {!pageActive && (
        <div className="appContainer">
          <audio
            ref={musicRef}
            className="hud-audio hud-audio--music"
            src={ambientMusic}
            loop
            preload="auto"
          />
          <audio
            ref={sfxRef}
            className="hud-audio hud-audio--sfx"
            src={sfxChannel}
            preload="auto"
          />

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
              <div className="experience-hud-card">
                <span className="sec-corner tl" aria-hidden="true" />
                <span className="sec-corner tr" aria-hidden="true" />
                <span className="sec-corner bl" aria-hidden="true" />
                <span className="sec-corner br" aria-hidden="true" />
                <div className="tick-strip" aria-hidden="true" />
                <div className="heading experience-hud-heading">
                  Mission log · Experience
                </div>
                <ExpTimeline />
              </div>
            </div>

            {/* <---------- Projects -----------> */}
            <div className="card-container" id="projects">
              <div className="projects-hud-card">
                <span className="sec-corner tl" aria-hidden="true" />
                <span className="sec-corner tr" aria-hidden="true" />
                <span className="sec-corner bl" aria-hidden="true" />
                <span className="sec-corner br" aria-hidden="true" />
                <div className="tick-strip" aria-hidden="true" />
                <div className="heading experience-hud-heading">
                  Mission dossier · Projects
                </div>
                <div className="card-grid">
                  {projects.map((project, index) => {
                    return (
                      <Card
                        className="card-ele"
                        key={project.key ?? index}
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
                <div className="projects-see-more-wrap">
                  <a
                    className="fancyButton projects-see-more-link"
                    href="https://github.com/Chethan30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-corner tl" aria-hidden="true" />
                    <span className="btn-corner tr" aria-hidden="true" />
                    <span className="btn-corner bl" aria-hidden="true" />
                    <span className="btn-corner br" aria-hidden="true" />
                    <span className="magic">SEE MORE</span>
                  </a>
                </div>
              </div>
            </div>
            {/* <---------- Skills (data-driven HUD) -----------> */}
            <div className="skills-container" id="skills">
              <div className="skills-hud-card">
                <span className="sec-corner tl" aria-hidden="true" />
                <span className="sec-corner tr" aria-hidden="true" />
                <span className="sec-corner bl" aria-hidden="true" />
                <span className="sec-corner br" aria-hidden="true" />
                <div className="tick-strip" aria-hidden="true" />
                <div className="heading experience-hud-heading">
                  Subsystem registry · Skills
                </div>
                <div className="skills-grid">
                  {SKILL_SECTIONS.map((section) => (
                    <SkillSection
                      key={section.id}
                      sectionId={section.id}
                      title={section.title}
                      skills={section.skills}
                    />
                  ))}
                </div>
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
    </div>
  );
}

export default App;
