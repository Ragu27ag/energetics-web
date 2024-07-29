import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import sidebar from "../../assets/images/sidebar.png";

export const Header = () => {
  if (isMobile) {
    return (
      <>
        {/* <a
          class="btn btn-primary"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Link with href
        </a> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 3vw",
          }}
        >
          <div>
            <h4 style={{ color: "#fff" }}>energetics.ai</h4>
          </div>
          <div>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{ background: "transparent", border: "0", outline: "0" }}
            >
              <img
                src={sidebar}
                alt=""
                style={{ width: "10vw", height: "5vh" }}
              />
              {/* Button with data-bs-target */}
            </button>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{
            background:
              "linear-gradient(159.62deg, #182458 36.04%, #2E56FD 86.1%)",
          }}
        >
          <div class="offcanvas-header">
            {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5> */}
            <i className="fa fa-close" style={{ fontSize: "7vh" }} />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="list-group plain-list">
              <li class="list-group-item">
                <a href="#">Products</a>
              </li>
              <li class="list-group-item">
                <a href="#">Case Studies</a>
              </li>
              <li class="list-group-item">
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};
