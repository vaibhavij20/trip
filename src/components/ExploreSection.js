import React, { useRef, useState } from "react";
import styles from "./ExploreSection.module.css";

const ExploreSection = ({ exploreItems }) => {
  const scrollRef = useRef(null);
  const [likedItems, setLikedItems] = useState({}); // State to track likes

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  const toggleLike = (index) => {
    setLikedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.exploreContainer}>
      <h2 className={styles.title}>More to Explore</h2>
      <div className={styles.wrapper}>
        <button onClick={() => scroll(-1)} className={styles.arrowButton}>&#9664;</button>
        <div ref={scrollRef} className={styles.scrollContainer}>
          {exploreItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <button className={styles.heartButton} onClick={() => toggleLike(index)}>
                {likedItems[index] ? "❤️" : "🤍"}
              </button>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.price}>Starts at ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)} className={styles.arrowButton}>&#9654;</button>
      </div>
    </div>
  );
};

export default ExploreSection;
