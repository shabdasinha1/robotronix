import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Add Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ai from "../../../assets/img/service2.jpg";
import wdevelopment from "../../../assets/img/service1.jpg";
import mobileDev from "../../../assets/img/mobile-dev.jpg";
import digital from "../../../assets/img/pexels-photo-1510610.jpeg";

const HomeCards = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Web",
      subtitle: "Development",
      img: wdevelopment,
      route: "/web-development",
    },
    {
      title: "Mobile",
      subtitle: "Development",
      img: mobileDev,
      route: "/mobile-app-development",
    },
    {
      title: "AI/ML",
      subtitle: "Collection",
      img: ai,
      route: "/web-development",
    },
    {
      title: "Digital",
      subtitle: "Evolution",
      img: digital,
      route: "/web-development",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="container d-flex flex-column align-items-center text-center">
        <h2 className="content-subtitle mb-2">Our Services</h2>
        <p className="content-para mb-5">
          We provide innovative solutions to help you build a truly digital
          workplace.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="section-5">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="d-flex justify-content-center"
                  onClick={() => navigate(service.route)}
                  style={{ cursor: "pointer" }}
                >
                  <figure className="figure text-center">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid"
                    />
                    <figcaption>
                      <div className="icon">
                        <span>
                          <ion-icon name="cube"></ion-icon>
                        </span>
                      </div>
                      <h2>
                        {service.title} <span>{service.subtitle}</span>
                      </h2>
                      <div className="caption">
                        <p>Explore More</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
