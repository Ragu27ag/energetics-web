import React from "react";
import "./footer.css";
import RightArrowIcon from "../assets/images/Arrow 17.png";
import VRVideo from "../assets/images/vr video.gif";
import VectotImg from "../assets/images/Vector.png";

export const FooterSection = () => {
  return (
    <>
      <div
        className="connect-section d-flex justify-content-center align-items-center"
        style={{ marginTop: "15vh 0" }}
      >
        <div className="connect-section-border">
          <p>
            We don’t just talk about innovation—we live it. Ready to transform
            your business?{" "}
          </p>
          <div className="connect-button-section">
            <button>
              Let's Talk<img src={RightArrowIcon}></img>
            </button>
          </div>
        </div>
      </div>
      <div className="vr-sample-section d-flex justify-content-center align-items-center">
        <div className="background-video">
          <img src={VRVideo}></img>
          <div className="vr-sample-section-content">
            <div className="first-line">
              <img src={VectotImg}></img>
              <p>OUR VR SAMPLE VIDEO</p>
            </div>
            <div className="experience-now-btn">
              <button>EXPERIENCE NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-inner-div-1">
          <div className="footer-logo">
            <p>energetics.ai</p>
            <div className="logos">
              <img className="fb" />
              <img className="linkedin" />
              <img className="twitter" />
              <img className="insta" />
            </div>
          </div>
          <div className="footer-company">
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Carrer</li>
              <li>Testimonial</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-service">
            <p>Services</p>
            <ul>
              <li>Research & development</li>
              <li>Technology consultancy</li>
              <li>App & Game development</li>
              <li>Bussiness strategy & Consultancy</li>
            </ul>
          </div>
          <div className="footer-products">
            <p>Products</p>
            <ul>
              <li>HR management system</li>
              <li>Retail management system</li>
              <li>Sales management system</li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contact</p>
            <ul>
              <li>support@energetics.ai</li>
              <li>+91 922-020-2020</li>
              <li>
                Sri Durga Enclave River View Residency 2nd St,Karapakkam
                ,Chennai ,Tamil Nadu 600100
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-inner-div-2">
          <div className="cprt">Copyright@energetics.ai 2024</div>
          <p>Term & conditions</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </>
  );
};
