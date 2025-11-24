import React,{useState} from "react";
import digi from "./../../assets/img/digital-evolution.jpg";
import { NavLink } from "react-router-dom";
import {
  FaCode,
  FaRobot,
  FaHandshake,
  FaLightbulb,
  FaBrain,
  FaComments,
} from "react-icons/fa";
const ValueItem = ({ icon, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const shortDesc = description.slice(0, 150) + "...";

  return (
    <div className="digital-value-item h-100">
      <div className="value-icon">{icon}</div>
      <h3 className="value-title">{title}</h3>
      <p className="value-description">
        {expanded ? description : shortDesc}
        <span
          onClick={toggleExpand}
          className="text-dark"
          style={{ cursor: "pointer", marginLeft: "5px" }}
        >
          {expanded ? " Show less" : " Read more"}
        </span>
      </p>
    </div>
  );
}; 

const DigitalEvolution = () => {
  const values = [
    {
      icon: <FaCode />,
      title: "Low-code development",
      description:
        "Low-code automates the process of application development. The low code approach eliminates undue delays and costs associated with conventional coding approaches. Softude helps businesses with low-code development solutions to quickly and cost-effectively build their digital assets for enabling their business to be tech-driven.",
    },
    {
      icon: <FaRobot />,
      title: "RPA consulting services",
      description:
        "Robotic Process Automation makes a mundane business process fast, error-free and intelligent. Just as humans work step-by-step in a process, RPA also executes pre-programmed instructions step-by-step over structured or unstructured data, learn data patterns and make a new decision on its own. End-to-end RPA/IPA solutions by keeping reliability and ROI in mind.",
    },
    {
      icon: <FaHandshake />,
      title: "Data science",
      description:
        "Data science is the process of analyzing both structured and unstructured business data using statistical algorithms and analytics software tools in order to draw conclusions based on facts and create predictive models. Our Data Science consultants help businesses leverage powerful techniques like clustering, AI/ML, NLP, regressions, for gleaning the data and surface previously dormant insights.",
    },
    {
      icon: <FaLightbulb />,
      title: "IoP development",
      description:
        "It is the age of the Internet of Things (IoT). From smart devices in day-to-day lives to the most complex business operations, IoT is everywhere connecting the physical world with the people and processes. The reams of data from IoT apps help in managing, monitoring and analyzing a process to boost efficiency. Softude helps in building your IoT authority fuelling smart projects in the 4.0 industry sphere.",
    },
    {
      icon: <FaBrain />,
      title: "AI/ML development",
      description:
        "With smart systems permeating in all areas, the use of Artificial Intelligence (AI) and Machine Learning (ML) continues to grow. Smart systems are able to think, scan the operating environment, and adapt to changing operating conditions. We bring deep expertise in AI/ML capabilities for your business to appoint deep learning, predictive intelligence, and advanced simulation.",
    },
    {
      icon: <FaComments />,
      title: "WhatsApp chatbot",
      description:
        "Whether you are in B2B, B2C or any other trade, in the age of social media and instant messaging, customers expect quick response from a business. Businesses need to facilitate customer-business interaction wherever and whenever their clients need them. We design the WhatsApp chatbots to enhance and automate your channel of customer communication and support on your CRM, ERP, and POS systems.",
    },
  ];
  return (
    <>
      <section className="digital-evolution-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold">
                Innovating the future with cutting-edge technology solutions.
              </h1>
              <p className="lead">
                We leverage trend-leading technology to provide the most
                impacting digital solutions for your business.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="digital-banner-image">
                <img src={digi} alt="Digital Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container d-flex flex-column align-items-center text-center">
        <h2 className="content-subtitle mb-2 ">
          Our comprehensive digital transformation services
        </h2>
      </div>
      <section className="core-values py-5">
        <div className="container">
          <div className="row g-4">
            {values.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <ValueItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-fluid heroo">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="digital-evo-text">
                Building{" "}
                <span style={{ color: "#1eb8f0" }}>
                  pro-domain digital experiences
                </span>{" "}
                for businesses
              </h2>

              <p className="digital-evo-para">
                Growing demand and changing user preferences for product
                experiences have brought about a major change in day-to-day
                businesses. Softude offers result-driven digital transformation
                services that outperform the pace of disruption.
              </p>
              <NavLink to="/contact-us">
                <button className="btn btn-primary btn-sm align-item-center">
                  Get in touch
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <BlogSection /> */}
    </>
  );
};

export default DigitalEvolution;
