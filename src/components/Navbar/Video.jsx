import React from "react";
import "./Video.css";

function Video() {
  return (
    <header className="hero-section">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Welcome to Kalyan Emporium</h1>
        <p>Crafting Elegance & Tradition</p>
      </div>
    </header>
  );
}

export default Video;
