import React, { useState, useEffect,useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// logo
import aictsl from "./../../assets/img/aictsl.png";
import eicher from "./../../assets/img/eicher.png";
import honda from "./../../assets/img/honda.png";
import force from "./../../assets/img/force-logo.png";
import pinnacle from "./../../assets/img/pinnacle.png";
import dwarka from "./../../assets/img/dwarka.png";
import mpidc from "./../../assets/img/mpidc1.png";
import pratibha from "./../../assets/img/pratibha.png";
import airport from "./../../assets/img/airport.png";
import frlogo from "./../../assets/img/fr-logo.png";

// testimonial images
import cdn from "./../../assets/img/ds.jpg";
import jatin from "./../../assets/img/jatin.jpg";
import aashish from "./../../assets/img/ashish.jpg";
import slogo from "./../../assets/img/slogo.jpg";
import user from "./../../assets/img/user.png";

import "swiper/css";
import "swiper/css/pagination";

// Image URLs for the carousel
const clientImages = [
  aictsl,
  eicher,
  honda,
  force,
  pinnacle,
  dwarka,
  mpidc,
  pratibha,
  airport,
  frlogo,
];

const ClientTestimonials = () => {
 const testimonials = useMemo(
   () => [
     {
       text: "The team demonstrated exceptional project management skills throughout the development and integration of the sleep tracker device. They maintained clear and consistent communication, providing regular updates on project progress.",
       author: "Divyesh Shrivastava",
       role: "Vice President at CDN Software Solutions Pvt. Ltd.",
       rating: 5,
       image: cdn,
     },
     {
       text: "The project management was exceptional and a well-organized approach throughout the process. They consistently delivered items on time, ensuring each milestone was met as planned. The team was proactive in addressing any requests or adjustments, always responding promptly to our needs. Overall, their responsiveness and professionalism were outstanding.",
       author: "Jatin Puri",
       role: "Managing Director at Color Drop Business Solutions",
       rating: 5,
       image: jatin,
     },
     {
       text: "The team was very enthusiastic with young & talented members. They offer technical expertise with creative design to build responsive, user-friendly website. When comes to the deadline, they were perfect, delivered the complete project in the timeline with no bugs and errors. I will surely recommend the Robotronix Engineering Tech Pvt Ltd. to everyone.",
       author: "Ashish Shrivastava",
       role: "Chief Technical Officer at Opulence Infotech Pvt. Ltd.",
       rating: 5,
       image: aashish,
     },
     {
       text: "It was great working with Robotronix team. They demonstrated excellent project management throughout the development and integration process. They maintained clear and consistent communication and provided regular updates on the progress.",
       author: "Sunil Pandey",
       role: "Marketing Head at EVOLVE IT SOLUTIONS PVT LTD",
       rating: 5,
       image: slogo,
     },
     {
       text: "ROBOTRONIX ENGINEERING TECH PVT. LTD.'s work has increased the client's efficiency by 30%, user engagement by 35%, and reduced document retrieval time by 45%. The team has been proactive, timely, and responsive. Their collaborative strategy and commitment to quality have led to a smooth process.",
       author: "Abhishek Srivastava",
       role: "Director, Mobitra Technologies Private Limited",
       rating: 5,
       image: user,
     },
     {
       text: "ROBOTRONIX ENGINEERING TECH PVT. LTD.'s work transformed the client's industrial operations by enabling real-time tracking of their robots' operation count and efficiency. The team delivered on time and provided reliable post-launch support. Their IoT expertise and transparent approach stood out.",
       author: "Sunil Shastri",
       role: "Manager, Pinnacle Industries Limited",
       rating: 5,
       image: user,
     },
     {
       text: "They conducted in-depth research to ensure every aspect of the project was thoroughly explored.",
       author: "Divyesh Shrivastava",
       role: "VP, CDN Software Solutions Pvt. Ltd.",
       rating: 5,
       image: user,
     },
   ],
   []
 );


  const [selectedRating] = useState("all"); // removed `setSelectedRating` to fix warning
  const [filteredTestimonials, setFilteredTestimonials] =
    useState(testimonials);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setFilteredTestimonials(
        selectedRating === "all"
          ? testimonials
          : testimonials.filter((t) => t.rating >= parseInt(selectedRating))
      );
      setLoading(false);
    }, 1000);
  }, [selectedRating, testimonials]); // FIX: added testimonials dependency

  return (
    <>
      <div id="testimonials" className="testimonials">
        <div className="leadership-hero-section">
          <h1 className="leadership-main-title">Client Testimonials</h1>
        </div>

        <div className="container">
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <div className="testimonial-grid">
              {filteredTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                    <div className="testimonial-author">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="author-image"
                      />
                      <div className="author-details">
                        <p className="author-name">{testimonial.author}</p>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="clients">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={4500}
                slidesPerView={6}
                pagination={{ clickable: false }}
                modules={[Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  500: { slidesPerView: 3 },
                  600: { slidesPerView: 4 },
                  800: { slidesPerView: 6 },
                  1200: { slidesPerView: 6 },
                }}
              >
                {clientImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="item box">
                      <img
                        alt={`client logo ${index + 1}`}
                        className="client-img"
                        src={image}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
