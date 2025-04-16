import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import "./Hero.css";  
import bannerImage from "../assets/banner.jpg";  

const Hero = () => {
  const navigate = useNavigate();  // ✅ Initialize navigate function

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Journey, Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <button className="travel-btn" onClick={() => navigate("/travelPlan")}>
          Travel Plan
        </button>
      </div>
    </div>
  );
};

export default Hero;
