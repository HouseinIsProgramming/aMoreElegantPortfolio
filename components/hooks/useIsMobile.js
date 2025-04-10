import { useState, useEffect, useCallback } from "react";

const useIsMobile = (breakpoint = 640) => {
  const query = `(max-width: ${breakpoint - 1}px)`;

  const mediaQueryList =
    typeof window !== "undefined" ? window.matchMedia(query) : null;

  const getMatches = useCallback(() => {
    return mediaQueryList ? mediaQueryList.matches : false;
  }, [mediaQueryList]);

  const [isMobile, setIsMobile] = useState(getMatches());

  useEffect(() => {
    if (!mediaQueryList) {
      return;
    }

    const handleChange = () => {
      setIsMobile(getMatches());
    };

    try {
      mediaQueryList.addEventListener("change", handleChange);
    } catch (e) {
      mediaQueryList.addListener(handleChange);
      console.log(e);
    }

    return () => {
      try {
        mediaQueryList.removeEventListener("change", handleChange);
      } catch (e) {
        mediaQueryList.removeListener(handleChange);
        console.log(e);
      }
    };
  }, [mediaQueryList, getMatches]);

  return isMobile;
};

export default useIsMobile;
