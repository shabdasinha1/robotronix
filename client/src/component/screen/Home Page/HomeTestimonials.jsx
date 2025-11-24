import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/testimonials`
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderContent = (text, index) => {
    const limit = 100;
    const isExpanded = expandedIndexes.includes(index);
    if (!text) return "";

    if (text.length <= limit) return text;

    return (
      <>
        {isExpanded ? text : text.slice(0, limit)}{" "}
        <span
          onClick={() => toggleExpand(index)}
          style={{ cursor: "pointer", color: "#000" }}
        >
          {isExpanded ? " show less" : "..."}
        </span>
      </>
    );
  };

  if (loading) return <p className="text-center">Loading testimonials...</p>;

  return (
    <>
      <div className="container d-flex flex-column align-items-center text-center">
        <h2 className="content-subtitle mb-2">Testimonials</h2>
        <p className="content-para mb-5">What our clients say about us.</p>
      </div>

      <div className="container mb-4 testimonial-swiper-wrapper">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="testimonial-swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={testimonial.id || index}
              className="d-flex align-items-stretch"
            >
              <div className="testimonial-swiper-card p-4 shadow-sm rounded bg-white">
                <div className="testimonial-swiper-rating mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                </div>

                <p className="testimonial-swiper-content">
                  "{renderContent(testimonial.content, index)}"
                </p>

                <div className="testimonial-swiper-author d-flex align-items-center mt-3">
                  <img
                    src={
                      testimonial.image
                        ? `${process.env.REACT_APP_API_URL}/uploads/${testimonial.image}`
                        : `${process.env.REACT_APP_API_URL}/uploads/user.png`
                    }
                    alt={testimonial.name}
                    className="testimonial-swiper-image me-3"
                  />
                  <div>
                    <h5 className="testimonial-swiper-name mb-0">
                      {testimonial.name}
                    </h5>
                    <small className="testimonial-swiper-role text-muted">
                      {testimonial.role}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="testimonial-controls text-center mt-4">
          <button className="custom-prev btn btn-outline-light me-2" aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>
          <button className="custom-next btn btn-outline-light" aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonials;
