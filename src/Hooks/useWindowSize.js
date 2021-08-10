import React, { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.outerWidth > 678) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.addEventListener("resize", updateSize);
  }, []);
  return isMobile;
}
