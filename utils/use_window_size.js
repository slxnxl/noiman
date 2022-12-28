import { useState, useEffect } from "react";
// TODO объединить функции получения ширины экрана с такой же функцией в new_sphere.js
export default function useWindowSize() {
  const getSize = () => {
    return {
      width: typeof window !== "undefined" && window?.innerWidth,
      height: typeof window !== "undefined" && window?.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
