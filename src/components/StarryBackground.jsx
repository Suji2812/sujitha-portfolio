import React, { useEffect } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  useEffect(() => {
    const numStars = 100;
    const container = document.getElementById("stars-container");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      container.appendChild(star);
    }

    // Shooting stars every few seconds
    const interval = setInterval(() => {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = `${Math.random() * 50 + 10}%`;
      container.appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div id="stars-container"></div>;
};

export default StarryBackground;
