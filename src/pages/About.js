import React from "react";
import "./About.css"; 
import aboutImage from "../assets/ban.jpg"; 

const About = () => {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="about-content">
        <h1>About Trippy Travel</h1>
        <p>
          Welcome to Trippy Travel! We are your one-stop destination to explore
          the world’s most beautiful places. Whether you’re seeking adventure,
          relaxation, or cultural immersion, we’ve got it all planned out for you.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide personalized travel plans that match your
          interests, budget, and schedule. Explore handpicked destinations, stay
          at luxurious hotels, and enjoy the best experiences the world has to
          offer!
        </p>
        <h3>Destinations We Love</h3>
        <p>
          From the romantic streets of Paris to the serene beaches of Santorini,
          we offer trips to the most captivating destinations. Let us make your
          travel dreams come true!
        </p>
      </div>
    </div>
  );
};

export default About;
