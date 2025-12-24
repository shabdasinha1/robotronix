import { useEffect } from "react";

const ThemeInitializer = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return null;
};

export default ThemeInitializer;
