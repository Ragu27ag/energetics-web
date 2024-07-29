import React, { useState, useRef, useEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";

export const Accordian = ({ index, data, headingId, collapseId, targetId }) => {
  //   console.log("item", item, "iii", index);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const mouseEnter = () => {
    setIsOpen(true);
  };
  //   const mouseEnter = () => {
  //     setTimeout(() => {
  //       setIsOpen(true);
  //     }, 200); // Adjust the delay as needed
  //   };

  const mouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      //   console.log("contentRef.current", contentRef.current.style);
      //   contentRef.current.style.maxHeight =
      //     contentRef.current.scrollHeight + "px";
    } else {
      //   contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  //   console.log("image", image);
  //   let imgg = image.map((x) => x);

  if (isMobile && !isTablet) {
    return (
      <>
        <div>
          <div className="accordion-item" key={index}>
            <h2 class="accordion-header" id={headingId}>
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={targetId}
                aria-expanded={index === 0}
                aria-controls={collapseId}
              >
                {/* Accordion Item #1 */}
                {/* {"0"}
                        {index + 1}&nbsp;&nbsp; */}
                {data.title}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={headingId}
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="img-section">
                  <img src={data.image} alt="" />
                </div>
                <p>{data.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* new old */}
        {/* <div
        className="accordion-item"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className="acc-header accordion-header">
          <p>
            {"0"}
            {index + 1}&nbsp;&nbsp;{item}
          </p>
          <div className={`img-section ${isOpen ? "img-section-hover" : ""}`}>
            <img src={image} alt="" className="tilt-on-hover" />
          </div>
        </div>
        {isOpen && (
          <>
            <div className="acc-header accordion-header">
              <div className={"img-section img-section-hover"}>
                <img src={image} alt="" className="tilt-on-hover" />
              </div>
              <div
                className={`accordion-content ${isOpen ? "open" : ""}`}
                ref={contentRef}
              >
                {data.content}
              </div>
            </div>
          </>
        )}
      </div> */}
        <div
          className="accordion-item"
          style={{ position: "relative" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div
            className={`acc-header accordion-header ${isOpen ? "open" : ""}`}
          >
            {/* <div className="acc-header accordion-header"> */}
            <p>
              {"0"}
              {index + 1}&nbsp;&nbsp;{data.title}
            </p>
            <div className={`img-section ${isOpen ? "img-section-hover" : ""}`}>
              <img src={data.image} alt="" />
            </div>
          </div>
          {isOpen && (
            <>
              <div
                className={`accordion-content ${isOpen ? "open" : ""}`}
                ref={contentRef}
              >
                {data.content}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
};
