import { useEffect, useState, useCallback } from "react";
import HomeSlider from "./Home Page/HomeSlider";
import HomeCards from "./Home Page/HomeCards";
import HomeTestimonials from "./Home Page/HomeTestimonials";
import HomeIndustries from "./Home Page/HomeIndustries";
import About from "./About";

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn(...args);
    }
  };
};

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = throttle(() => {
      setShowScrollTop(window.pageYOffset > 300);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeSlider />
      <div className="container-bg">
        <About />
        <HomeCards />
        {/* <hr className="hr-text" /> */}
        <hr className="hr-text" />
        <HomeIndustries />
        <hr className="hr-text" />
        <HomeTestimonials />
        {/* <hr className="hr-text" /> */}
      </div>

      {showScrollTop && (
        <>
          <button
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </>
      )}
    </>
  );
};

export default Home;
