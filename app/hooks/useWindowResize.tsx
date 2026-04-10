import { useState, useEffect } from "react";

// set Mobile status based on window resize
export function useWindowSize() {
  //choose the screen size
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    // set the window size based on current size
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setWindowSize(window.innerWidth);
        setIsMobile(true);
      }
      if (window.innerWidth >= 501) {
        setWindowSize(window.innerWidth);
        setIsMobile(false);
      }
    };

    // sets the initial size
    handleResize();

    // window listens for resize
    window.addEventListener("resize", handleResize);
  }, [windowSize, isMobile]);

  return { isMobile, windowSize };
}
