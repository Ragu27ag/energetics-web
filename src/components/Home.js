import React from "react";
import "../assets/scss/home.scss";
import imgs from "../assets/images/glow circle.png";
import imgsglow from "../assets/images/Ellipse 2.png";
import linear from "../assets/images/linear.svg";
import figma from "../assets/images/figma.svg";
import github from "../assets/images/github.svg";
import jira from "../assets/images/jira.svg";
import slack from "../assets/images/slack.svg";
import gif from "../assets/images/GIf.gif";

const Home = () => {
  return (
    <div className="main-div">
      <div className="header">
        <div className="inner-header">
          <div className="logo-div">
            <h4>energetics.ai</h4>
          </div>
          <div className="option-outer-div">
            <div className="options-div">
              <p>Products</p>
              <p>Case Studies</p>
              <p>Career</p>
            </div>
          </div>
          <div className="profile-div">
            <p>hello@energetics.ai</p>
          </div>
        </div>
      </div>
      <div className="main-body-1">
        <div className="main-body-div1">
          <div className="header-div">
            <h3>Transforming Your Bold Ideas Into Reality!</h3>
            <h4>Bring your Idea to reality with state of the art technology</h4>
            <div className="get-started">
              <p>Get started</p>
            </div>
          </div>
        </div>
        <div className="main-body-div2">
          <div className="img-div">
            <img src={imgsglow} className="glow-moon" alt="glow-moon-img" />
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
        <div className="about-anime-div">
          <div className="about-anime-content">
            <p>Crafting Experiences across Platform</p>
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
    </div>
  );
};

export default Home;
