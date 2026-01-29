import { useEffect, useRef, useState } from "react";

const useRevealOnScroll = ({
  threshold = 0.2,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const ref = useRef(null);
  const observerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    // Do nothing if:
    // 1. No element
    // 2. Already visible and only needs to run once
    if (!node || (once && visible)) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once && observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(node);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin, once, visible]);

  return { ref, visible };
};

export default useRevealOnScroll;
