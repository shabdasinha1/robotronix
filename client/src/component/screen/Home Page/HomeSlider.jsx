import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../assets/img/empower.jpg";
import banner2 from "../../../assets/img/digital-world-cloud.jpg";
import banner3 from "../../../assets/img/circuit-board.jpg";
import banner4 from "../../../assets/img/robot.jpg";

// logo
import aictsl from "../../../assets/img/aictsl.png";
import eicher from "../../../assets/img/eicher.png";
import honda from "../../../assets/img/honda.png";
import force from "../../../assets/img/force-logo.png";
import pinnacle from "../../../assets/img/pinnacle.png";
import dwarka from "../../../assets/img/dwarka.png";
import mpidc from "../../../assets/img/mpidc1.png";
import pratibha from "../../../assets/img/pratibha.png";
import airport from "../../../assets/img/airport.png";
import frlogo from "../../../assets/img/fr-logo.png";

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

const slides = [
  {
    id: 1,
    title: "Robotronix",
    description:
      "We believe in a fresh and better tomorrow. We live in a world of changing every moment then why should we stop ourselves from evolving? We are developing new Automotive executions every day. You can join us to develop new skills and explore creativity with us.",
    image: banner1,
    color: "#2C3E50",
  },
  {
    id: 2,
    title: "IoT & Embedded Systems",
    description:
      "Designing smart, connected systems—our IoT and embedded solutions power automation, efficiency, and data-driven insight.",
    image: banner2,
    color: "#34495E",
  },
  {
    id: 3,
    title: "Empowering Digital Transformation",
    description:
      "We help businesses evolve with next-gen digital platforms, cloud services, and smart integrations.",
    image: banner3,
    color: "#1C2833",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and agile—our cloud services help you modernize infrastructure, accelerate innovation, and optimize costs.",
    image: banner4,
    color: "#283747",
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // FIXED: Wrapped with useCallback
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [currentSlide, isAnimating]
  );

  // FIXED EFFECT
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <div className="home-slider-container">
        <div className="home-slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`home-slider-slide ${
                index === currentSlide ? "active" : ""
              } ${
                index === (currentSlide - 1 + slides.length) % slides.length
                  ? "prev"
                  : ""
              } ${index === (currentSlide + 1) % slides.length ? "next" : ""}`}
              style={{ backgroundColor: slide.color }}
            >
              <div className="home-slider-image-wrapper">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="home-slider-image"
                />
                <div className="home-slider-overlay"></div>
              </div>

              <div className="home-slider-content">
                <h2 className="home-slider-title">{slide.title}</h2>
                <p className="home-slider-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="home-slider-button home-slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="home-slider-button home-slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        <div className="home-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`home-slider-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
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
                pagination={{
                  clickable: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  500: { slidesPerView: 3 },
                  600: { slidesPerView: 4 },
                  800: { slidesPerView: 4 },
                  1200: { slidesPerView: 4 },
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

export default HomeSlider;
