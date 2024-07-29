import React from "react";
import { Accordian } from "./accordiansection";
import accOne from "../assets/images/acc-01.png";
import accTwo from "../assets/images/acc-02.png";
import accThree from "../assets/images/acc-03.png";
import accFour from "../assets/images/acc-04.png";
import person from "../assets/images/person.png";
import star from "../assets/images/star.png";
import { isMobile, isTablet } from "react-device-detect";

export const MidSection = () => {
  const common = [
    {
      title: "Research & development",
      content:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: accOne,
    },
    {
      title: "Technology consultancy",
      content:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: accTwo,
    },
    {
      title: "App & Game development",
      content:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: accThree,
    },
    {
      title: "Business strategy & Consultancy",
      content:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: accFour,
    },
  ];

  console.log("isMobile", isMobile);
  if (isMobile && !isTablet) {
    return (
      <>
        <div className="mid-div">
          <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            Your Challenges, Our Solutions
          </p>
          <p className="mid-para05">
            Comprehensive Services to Elevate Your Business
          </p>
          <div className="accordion" id="accordionExample">
            {common.map((x, i) => {
              const headingId = `heading${i}`;
              const collapseId = `collapse${i}`;
              const targetId = `#${collapseId}`;
              return (
                <>
                  <Accordian
                    index={i}
                    data={x}
                    headingId={headingId}
                    targetId={targetId}
                    collapseId={collapseId}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div
          className="d-flex justify-content-around w-100 flex-column"
          style={{
            // justifyContent: "space-around",
            padding: "0 3vw",
            margin: "10vh 0",
          }}
        >
          <div
          // style={{ width: "35%" }}
          >
            <p className="para-mid">
              Let our experienced team Elevate your digital goals!
            </p>
            <p className="para-mid-01">
              We have successfully completed over 300+ projects from a variety
              of industries. In our team, designers work alongside developers
              and digital strategists, we believe this is our winning recipe for
              creating digital products that make an impact.
            </p>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "3vh" }}>
            <div className="side-data-one">
              <div
              // style={{ margin: "25px" }}
              >
                <div className="d-flex justify-content-between align-items-end">
                  <p
                    className="p-0 m-0"
                    style={{
                      fontSize: "3.5vh",
                    }}
                  >
                    50
                  </p>
                  <img src={person} alt="" className="img-data-one" />
                </div>
                <p className="m-0 p-0">In-House Experts</p>
              </div>
            </div>
            <div className="side-data-one">
              <div
              // style={{ margin: "25px" }}
              >
                <div className="d-flex justify-content-between align-items-end">
                  <p
                    className="p-0 m-0"
                    style={{
                      fontSize: "3.5vh",
                    }}
                  >
                    250
                  </p>
                  <img src={star} alt="" className="img-data-one" />
                </div>
                <p className="m-0 p-0">Five-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#151C3A",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              gap: "5vw",
              padding: "4vw",
            }}
          >
            <div style={{ width: "30%" }}>
              <p className="para_master01">Let Us Emprove You!</p>
            </div>
            <div style={{ width: "70%" }}>
              <p className="para_master">
                We're masters at crafting bespoke tech solutions. Whether you’re
                launching a groundbreaking startup or scaling an established
                business, we bring your vision to life with creativity and
                expertise.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mid-div">
          <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            Your Challenges, Our Solutions
          </p>
          <p className="mid-para05">
            Comprehensive Services to Elevate Your Business
          </p>
          {common.map((x, i) => (
            <Accordian item={x.title} index={i} image={x.image} data={x} />
          ))}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            margin: "15vh 0",
          }}
        >
          <div style={{ width: "35%" }}>
            <p className="para-mid">
              Let our experienced team Elevate your digital goals!
            </p>
            <p className="para-mid-01">
              We have successfully completed over 300+ projects from a variety
              of industries. In our team, designers work alongside developers
              and digital strategists, we believe this is our winning recipe for
              creating digital products that make an impact.
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div className="side-data-one">
              <div style={{ margin: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      fontSize: "30px",
                    }}
                  >
                    50
                  </p>
                  <img src={person} alt="" className="img-data-one" />
                </div>
                <p style={{ padding: "0", margin: "0" }}>In-House Experts</p>
              </div>
            </div>
            <div className="side-data-one">
              <div style={{ margin: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      fontSize: "30px",
                    }}
                  >
                    250
                  </p>
                  <img src={star} alt="" className="img-data-one" />
                </div>
                <p style={{ padding: "0", margin: "0" }}>Five-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#151C3A",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              gap: "5vw",
              padding: "4vw",
            }}
          >
            <div style={{ width: "30%" }}>
              <p className="para_master01">Let Us Emprove You!</p>
            </div>
            <div style={{ width: "70%" }}>
              <p className="para_master">
                We're masters at crafting bespoke tech solutions. Whether you’re
                launching a groundbreaking startup or scaling an established
                business, we bring your vision to life with creativity and
                expertise.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};
