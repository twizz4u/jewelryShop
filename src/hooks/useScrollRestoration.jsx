import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollRestoration() {
  const location = useLocation();
  const positions = {};

  useEffect(() => {
    const handlePopState = () => {
      const key = location.key || "root";
      if (positions[key]) {
        window.scrollTo(positions[key].x, positions[key].y);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);

  useEffect(() => {
    const key = location.key || "root";
    positions[key] = { x: window.scrollX, y: window.scrollY };
  }, [location]);

  return () => {
    const key = location.key || "root";
    positions[key] = { x: window.scrollX, y: window.scrollY };
  };
}

export default useScrollRestoration;
