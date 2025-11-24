import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Image URLs for the carousel
const clientImages = [
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776542/2_hmnhbj.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776563/3_nkeq4k.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776586/4_kocpoi.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776603/5_n711f2.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776612/6_jxhirl.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776627/7_xc8ala.png",
  "https://res.cloudinary.com/oralyildiz/image/upload/v1629776646/8_paofta.png",
];

const HomeLogoSlider = () => {
  return (
    <>
      {/* Logo section start*/}

      <div className="container d-flex flex-column align-items-center text-center min-vh-50">
        <h1 className="content-subtitle">Our Clients</h1>
        <p className="content-para">Trusted by clients nationwide.</p>
      </div>

      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                loop={true} // Infinite loop
                autoplay={{
                  delay: 4500, // Time between slides
                  disableOnInteraction: false, // Keep autoplay running on interaction
                  pauseOnMouseEnter: true, // Pause autoplay when mouse enters the swiper
                }}
                speed={4500} // Transition speed
                slidesPerView={6} // Show 4 slides at once
                pagination={{
                  clickable: false, // Disable pagination dots
                }}
                modules={[Autoplay]} // Only Autoplay needed for this functionality
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  500: {
                    slidesPerView: 3,
                  },
                  600: {
                    slidesPerView: 4,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
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

      {/* Logo section end */}
    </>
  );
};

export default HomeLogoSlider;
