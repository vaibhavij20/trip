import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./InfluencerReviews.css";

const influencers = [
  {
    name: "Ahsaas Channa",
    comment: "An absolute paradise for travelers! The serenity and beauty are unmatched.",
    image: "https://m.media-amazon.com/images/M/MV5BMTc1ZGExYzMtMzkyOC00OTJmLWFiYTUtMmFlOTE2ZGVkYTdmXkEyXkFqcGc@._V1_.jpg",
    placeImage: "https://images.unsplash.com/photo-1562920618-c427d9252d7a?q=80&w=3132&auto=format&fit=crop",
  },
  {
    name: "Emma Watson",
    comment: "A surreal experience! The breathtaking views left me in awe.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg",
    placeImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop",
  },
  {
    name: "Zayn Malik",
    comment: "A magical destination with stunning landscapes and peaceful vibes!",
    image: "https://cdn.shopify.com/s/files/1/1475/0992/files/Zayn_Malik_haircut_with_Crew_Cut_neat_beared_and_short_sides_600x600.jpg?v=1638205100",
    placeImage: "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const InfluencerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % influencers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? influencers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="influencer-reviews">
      {}
      <motion.div
        className="scrolling-container"
        style={{ backgroundImage: `url(${influencers[activeIndex].placeImage})` }}
        animate={{ opacity: [0.8, 1] }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="review-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image Gallery */}
        <div className="image-gallery">
          <motion.button
            onClick={handlePrev}
            whileTap={{ scale: 0.9 }}
            className="nav-button"
          >
            ◀
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={influencers[activeIndex].image}
              alt={influencers[activeIndex].name}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <motion.button
            onClick={handleNext}
            whileTap={{ scale: 0.9 }}
            className="nav-button"
          >
            ▶
          </motion.button>
        </div>

       
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="review-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>What Influencers Say</h2>
            <p className="reviewer-name">{influencers[activeIndex].name}</p>
            <p>"{influencers[activeIndex].comment}"</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default InfluencerReviews;
