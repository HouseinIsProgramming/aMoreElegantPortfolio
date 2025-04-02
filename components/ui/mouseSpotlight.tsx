"use client";

import React, { useState, useEffect } from "react";

const MouseSpotLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    opacity: 0.05,
    background: `radial-gradient(circle, var(--color-foreground) 0%, rgba(0, 0, 0, 0) 70%)`, // Adjust gradient
    pointerEvents: "none",
    transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    zIndex: 100,
  };

  return <div style={spotlightStyle} />;
};

export default MouseSpotLight;
