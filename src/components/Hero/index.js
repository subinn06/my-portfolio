import React from "react";
import "./index.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi,</h1>
        <h1>My name is</h1>
        <h1><span>Subin A</span></h1>
        <h1>I build creative and modern web apps</h1>
      </div>
      <div className="hero-image">
        <img src="https://res.cloudinary.com/dweegsaas/image/upload/v1755778568/WhatsApp_Image_2025-08-21_at_5.45.49_PM_ydnvsm.jpg" alt="dev" />
      </div>
    </section>
  );
}

export default Hero;