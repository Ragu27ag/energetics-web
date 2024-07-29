import React, { useEffect, useRef } from "react";
import "../assets/scss/home.scss";
import imgs from "../assets/images/glow circle.png";
import imgsglow from "../assets/images/Ellipse 2.png";
import linear from "../assets/images/linear.svg";
import figma from "../assets/images/figma.svg";
import github from "../assets/images/github.svg";
import jira from "../assets/images/jira.svg";
import slack from "../assets/images/slack.svg";
import gif from "../assets/images/GIf.gif";
import { FooterSection } from "./footer";
import { MidSection } from "./midsection";
import { isMobile, isTablet } from "react-device-detect";
import Typewriter from "typewriter-effect/dist/core";
import { Header } from "./Header/Header";

const Home = () => {
  const typewriterRef = useRef(null);
  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: ["Games(Desktop & Mobile)", "Web(Windows & Mac)"],
      autoStart: true,
      loop: true, // Optional: to loop the animation
      delay: 200,
    });
    // return () => typewriter.destroy(); // Cleanup function to stop the animation
  }, []);

  if (isMobile && !isTablet) {
    return (
      <>
        <Header />
        <div className="main-body-1">
          <div className="main-body-div1">
            <div className="header-div">
              <h3>Transforming Your Bold Ideas Into Reality!</h3>
              <h4>
                Bring your Idea to reality with state of the art technology
              </h4>
              <div className="get-started">
                <button>Get started</button>
              </div>
            </div>
          </div>
          <div className="main-body-div2">
            <div className="img-div">
              {/* <img src={imgsglow} className="glow-moon" alt="glow-moon-img" /> */}
              <img src={imgs} className="full-moon" alt="moon-img" />
            </div>
          </div>
        </div>
        <div className="partner-div" style={{ flexDirection: "column" }}>
          <div className="partner-div-logo-1">
            <p>Trusted Partners</p>
          </div>
          <div className="row">
            <div
              className="col-12 d-flex"
              style={{
                gap: "5%",
                overflowX: "auto",
                padding: "2vh 15px 0vh",
                width: "100vw",
              }}
            >
              <div className="col">
                <div className="partner-div-logo-2">
                  <div className="partner-img-div">
                    <img src={linear} alt="linear" />
                  </div>
                  <div className="partner-name-div">
                    <p>Linear</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="partner-div-logo-3">
                  <div className="partner-img-div">
                    <img src={figma} alt="figma" />
                  </div>
                  <div className="partner-name-div">
                    <p>Figma</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="partner-div-logo-4">
                  <div className="partner-img-div">
                    <img src={github} alt="github" />
                  </div>
                  <div className="partner-name-div">
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="partner-div-logo-5">
                  <div className="partner-img-div">
                    <img src={jira} alt="jira" />
                  </div>
                  <div className="partner-name-div">
                    <p>Jira</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="partner-div-logo-6">
                  <div className="partner-img-div">
                    <img src={slack} alt="slack" />
                  </div>
                  <div className="partner-name-div">
                    <p>Slack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-div">
          <div className="about-anime-div" style={{ width: "100%" }}>
            <div
              className="about-anime-content d-flex text-para-typewrite"
              style={{ width: "100%", padding: "0 5vw" }}
            >
              {/* <div ref={typewriterRef} className="type-write">
              {" "} */}
              <div style={{ fontSize: "4vh", color: "#fff" }}>
                {" "}
                Crafting Experiences across Platform
              </div>
              {/* </div> */}
              <div
                ref={typewriterRef}
                className="type-write"
                // style={{ width: "50%" }}
              />
            </div>
            <div className="about-anime-gif">
              <img src={gif} alt="anime-gif" />
            </div>
          </div>
          {/* <div className="about-content-div">
            <p>
              We’re not just another tech company, we are your partners in
              innovation, dedicated to building robust and cost-effective
              solutions that drive your business forward.
            </p>
          </div> */}
        </div>
        <MidSection />
        <FooterSection />
      </>
      // </div>
    );
  } else {
    return (
      <>
        <Header />
        <div className="main-body-1">
          <div className="main-body-div1">
            <div className="header-div">
              <h3>Transforming Your Bold Ideas Into Reality!</h3>
              <h4>
                Bring your Idea to reality with state of the art technology
              </h4>
              <div className="get-started">
                <button>Get started</button>
              </div>
            </div>
          </div>
          <div className="main-body-div2">
            <div className="img-div">
              {/* <img src={imgsglow} className="glow-moon" alt="glow-moon-img" /> */}
              <img src={imgs} className="full-moon" alt="moon-img" />
            </div>
          </div>
        </div>
        <div className="partner-div">
          <div className="partner-div-logo-1">
            <p>Trusted Partners</p>
          </div>
          <div className="partner-div-logo-2">
            <div className="partner-img-div">
              <img src={linear} alt="linear" />
            </div>
            <div className="partner-name-div">
              <p>Linear</p>
            </div>
          </div>
          <div className="partner-div-logo-3">
            <div className="partner-img-div">
              <img src={figma} alt="figma" />
            </div>
            <div className="partner-name-div">
              <p>Figma</p>
            </div>
          </div>
          <div className="partner-div-logo-4">
            <div className="partner-img-div">
              <img src={github} alt="github" />
            </div>
            <div className="partner-name-div">
              <p>GitHub</p>
            </div>
          </div>
          <div className="partner-div-logo-5">
            <div className="partner-img-div">
              <img src={jira} alt="jira" />
            </div>
            <div className="partner-name-div">
              <p>Jira</p>
            </div>
          </div>
          <div className="partner-div-logo-6">
            <div className="partner-img-div">
              <img src={slack} alt="slack" />
            </div>
            <div className="partner-name-div">
              <p>Slack</p>
            </div>
          </div>
        </div>
        <div className="about-div">
          <div className="about-anime-div" style={{ width: "100%" }}>
            <div
              className="about-anime-content d-flex text-para-typewrite"
              style={{ width: "100%", padding: "0 5vw" }}
            >
              {/* <div ref={typewriterRef} className="type-write">
              {" "} */}
              <div style={{ fontSize: "40px", width: "50%", color: "#fff" }}>
                {" "}
                Crafting Experiences across Platform
              </div>
              {/* </div> */}
              <div
                ref={typewriterRef}
                className="type-write"
                style={{ width: "50%" }}
              />
            </div>
            <div className="about-anime-gif">
              <img src={gif} alt="anime-gif" />
            </div>
          </div>
          <div className="about-content-div">
            <p>
              We’re not just another tech company, we are your partners in
              innovation, dedicated to building robust and cost-effective
              solutions that drive your business forward.
            </p>
          </div>
        </div>
        <MidSection />
        <FooterSection />
      </>
      // </div>
    );
  }
};

export default Home;
