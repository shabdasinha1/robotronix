import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@fancyapps/ui/dist/fancybox.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import hexa from "../../assets/img/hexa.png";

import banner from "../../assets/OfficeActivity/03. banner.jpeg";
import banner2 from "../../assets/OfficeActivity/banner2.jpeg";
import banner3 from "../../assets/OfficeActivity/banner3.jpeg";
import healthIcon from "../../assets/icons/healthcare.png";
import learningIcon from "../../assets/icons/knowledge.png";
import balanceIcon from "../../assets/icons/balance.png";
import structureIcon from "../../assets/icons/hierarchical.png";
import rewardIcon from "../../assets/icons/rewards.png";

import diwali from "../../assets/OfficeActivity/diwali.JPG";
import diwali1 from "../../assets/img/diwaliUtsav2.jpg";
import diwali2 from "../../assets/img/diwaliUtsav1.jpg";
import diwali3 from "../../assets/OfficeActivity/10. oct.jpeg";
import diwali4 from "../../assets/img/diwaliUtsav3.jpg";

import independence2 from "../../assets/img/inde4.jpg";
import independence3 from "../../assets/img/flag.jpg";
import independence4 from "../../assets/img/inde2.jpg";
import independence5 from "../../assets/img/inde3.jpg";

import ganeshUtsav1 from "../../assets/img/ganeshUtasav1.jpg";
import ganeshUtsav2 from "../../assets/img/ganeshUtsav2.jpg";
import ganeshUtsav3 from "../../assets/img/ganesUtav3.jpg";
import ganeshUtsav4 from "../../assets/img/ganeshUtsav4.jpg";
import ganeshUtsav5 from "../../assets/img/ganeshUtsav5.jpg";

import holi1 from "../../assets/img/holi1.jpg";
import holi2 from "../../assets/img/holi2.jpg";
import holi3 from "../../assets/img/holi3.jpg";
import holi4 from "../../assets/img/holi4.jpg";
import holi5 from "../../assets/img/holi5.jpg";

import team from "../../assets/img/group-pic1.jpg";
import { NavLink } from "react-router-dom";

const Culture = () => {
  const benefits = [
    { icon: healthIcon, text: "Comprehensive Health Plan" },
    { icon: learningIcon, text: "On Demand Learning & Development" },
    { icon: balanceIcon, text: "Work Life Balance" },
    { icon: structureIcon, text: "Supportive Organizational Structure" },
    { icon: rewardIcon, text: "Recognition & Reward System" },
  ];

  const bannerImages = [banner, banner2, banner3];

  const events = [
    {
      title: "Ganesh Chaturthi Celebration",
      description:
        "At Robotronix, we joyfully celebrate Ganesh Chaturthi with great enthusiasm and devotion. The festival is a time for togetherness, as we come together to offer prayers, seek blessings from Lord Ganesha, and share sweets and traditional offerings. This year, we have organized a grand celebration, with decorations, prayers, and performances that highlight the cultural richness of the festival.",
      images: [
        ganeshUtsav1,
        ganeshUtsav2,
        ganeshUtsav3,
        ganeshUtsav4,
        ganeshUtsav5,
      ],
    },
    {
      title: "Diwali Celebration",
      description:
        "At Robotronix, we ensure that the entire team celebrates Diwali by amalgamating prosperity and safety together. Our earnest efforts embrace the festival of lights as a guiding force towards camaraderie and togetherness.",
      images: [diwali, diwali1, diwali2, diwali3, diwali4],
    },
    {
      title: "Independence Day Celebration",
      description:
        "Team Softude celebrated the 76th Independence Day “Azadi Ka Amrit Mahotsav” based on five themes – Freedom, Ideas, Resolve, Actions, and Achievements. We pay homage to our great freedom fighters because of whom we breathe the air of freedom today. Lot many patriotic songs and dances performed by the Softude Team were the attractions of the evening. May the future bring more glory to our great nation. We are proud to be Indian and wish all the Indians a Happy Independence Day!",
      images: [
        independence2,
        team,
        independence3,
        independence4,
        independence5,
      ],
    },
    {
      title: "Holi Celebration",
      description:
        "This year, our team participated in a colorful and energetic event filled with traditional music, dancing, and, of course, throwing of vibrant colors! From lively games to sweet treats like gujiya and thandai, every moment was filled with fun and festivity. Employees across departments joined together to create a warm and joyful atmosphere, sharing laughter and creating memories that will last a lifetime.As part of our celebration, we also hosted a color war, where teams competed to cover each other with the brightest hues.",
      images: [holi1, holi2, holi3, holi4, holi5],
    },
  ];
  const images = [
    team,
    diwali,
    holi1,
    diwali1,
    independence2,
    independence3,
    diwali3,
    diwali4,
  ];

  return (
    <>
      <div className="culture-section">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="banner-slider"
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="banner-container">
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="banner-image"
                />
                <div className="overlay"></div>
                <div className="banner-text">
                  <h1 style={{ color: "white" }}>Welcome to Our IT Culture</h1>
                  <h2 style={{ color: "white" }}>
                    <Typewriter
                      words={[
                        "Innovation, Collaboration, and Growth",
                        "Empowering Tech Solutions",
                        "A Workplace Built for Success",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={1200}
                    />
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="benefits-section">
        <h2 className="benefits-title">Enjoy Great Benefits and Perks</h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="icon-wrapper">
                <img
                  src={benefit.icon}
                  alt={benefit.text}
                  className="benefit-icon"
                />
              </div>
              <p className="benefit-text">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* picture slider section start  */}
      <div className="pic-slider-section">
        <h2 className="benefits-title"> We live freely! Life @ Robotronix</h2>
        <p>We’re more than just a workplace we’re a family</p>
        <div className="container p-0">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* gallery with content section start */}
      <section className="gallery-slider-section py-5">
        <h2 className="benefits-title">Events@Robotronix</h2>

        <div className="container">
          {events?.map((event, index) => (
            <div className="row mb-5" key={index}>
              <div
                className={`col-md-6 ${index % 2 === 0 ? "order-md-1" : "order-md-2"
                  }`}
              >
                {/* Gallery section with dynamic images */}
                <div className="gallery">
                  {event.images.map((cultureimages, imgIndex) => (
                    <div key={imgIndex} className="gallery-panel">
                      <img
                        src={cultureimages}
                        alt={`Event ${imgIndex + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Event description */}
              <div
                className={`col-md-6 mt-5 ${index % 2 === 0 ? "order-md-2" : "order-md-1"
                  }`}
              >
                <h2 className="fw-bold">{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    
      <div className="container-fluid heroo">
        <div className="row">
          <div className="col-md-5">
            <div className="">
              <div className="heroo__title">
                <h2>
                  Lets <span style={{ color: "#1eb8f0" }}>Transform </span>
                  Together
                </h2>
                <NavLink to="/career">
                  <h3>
                    Join Our Team{" "}
                    <span className="arrow-animation">
                      <RiArrowRightDoubleLine />
                    </span>
                  </h3>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-3">
            {" "}
            <div className="hexa-shape-img">
              <img src={hexa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Culture;
