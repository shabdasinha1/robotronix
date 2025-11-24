import React, { useState, useRef } from "react";
// import industries from "../../../assets/img/industries-we-serve.jpg";
import industries from "../../../assets/img/1-RR0421-Cline-high-performing-team-members-900x550 (1).jpg";
import industries1 from "../../../assets/img/636.jpg";
import industries2 from "../../../assets/img/photo.jpg";
import industries3 from "../../../assets/img/teamwork-1500x1001-1.jpg";
const HomeIndustries = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Default to first item open
  const [currentImage, setCurrentImage] = useState(industries);
  const contentRefs = useRef([]);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setCurrentImage(accordionData[index]?.image || industries);
  };
  const accordionData = [
    {
      title: "Focus on Delivery with Process",
      content:
        "We discuss your business goals, target audience, and marketing efforts to tailor our  services to your needs.",
      image: industries1,
    },
    {
      title: "Detailed Project Proposal",
      content:
        "We analyze market trends and develop a data-driven strategy for your success.",
      image: industries3,
    },
    {
      title: "Milestones-Based Approach",
      content:
        "We analyze market trends and develop a data-driven strategy for your success.",
      image: industries1,
    },
    {
      title: "Milestones-Based Approach",
      content:
        "We execute the strategy across relevant marketing channels for maximum impact.",
      image: industries2,
    },
    {
      title: "In-Depth User Epic Story",
      content:
        "We track performance metrics and continuously optimize strategies.",
      image: industries,
    },
    {
      title: "100% Communication Rate",
      content:
        "We analyze market trends and develop a data-driven strategy for your success.",
      image: industries1,
    },
  ];

  return (
    <>
      <div className="container d-flex flex-column align-items-center text-center">
        <h2 className="content-subtitle mb-2 ">Why Choose Robotronix Team</h2>
        <p className="content-para mb-5">Why Choose Robotronix Team</p>
      </div>
      <div className="container mt-2 mt-md-5">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 industries-img">
            {" "}
            {/* Fixed class name */}
            <img src={currentImage} alt="" />
          </div>

          <div className="col-12 col-lg-6 col-md-12 col-sm-12">
            <div className="working-process">
              <div className="container">
                <div className="row">
                  <div className="accordion" id="accordionExample">
                    {accordionData.map((item, index) => (
                      <div className="accordion-item mb-3" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              activeIndex === index ? "collapsed" : ""
                            }`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                          >
                            {" "}
                            {item.title}
                          </button>
                        </h2>
                        <div
                          ref={(el) => (contentRefs.current[index] = el)}
                          className="accordion-collapse"
                          style={{
                            maxHeight:
                              activeIndex === index
                                ? `${contentRefs.current[index]?.scrollHeight}px`
                                : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease-in-out",
                          }}
                        >
                          <div className="accordion-body">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndustries;
