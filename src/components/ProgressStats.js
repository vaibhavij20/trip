import React, { useState, useEffect } from 'react';
import './ProgressStats.css';
import { motion } from 'framer-motion';

const Counter = ({ value, prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 1500; // 1.5 seconds

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * value));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{prefix}{count.toLocaleString()}</span>;
};

const ProgressStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { 
      label: 'Places Visited', 
      value: 42, 
      maxValue: 100, 
      color: '#ffa500',
      icon: '🌎'
    },
    { 
      label: 'Money Spent', 
      value: 15000, 
      maxValue: 20000, 
      color: '#ff8c00', 
      prefix: '$',
      icon: '💰'
    },
    { 
      label: 'Travel Days', 
      value: 120, 
      maxValue: 365, 
      color: '#ffa500',
      icon: '✈️'
    },
    { 
      label: 'Reviews Posted', 
      value: 28, 
      maxValue: 50, 
      color: '#ff8c00',
      icon: '⭐'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector('.progress-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      className="progress-stats"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Your Travel Statistics</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="stat-header">
              <span className="stat-icon">{stat.icon}</span>
              <h3>{stat.label}</h3>
            </div>
            <div className="progress-bar-container">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ 
                  width: isVisible ? `${(stat.value / stat.maxValue) * 100}%` : '0%'
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ backgroundColor: stat.color }}
              >
                <span className="progress-value">
                  {isVisible && <Counter value={stat.value} prefix={stat.prefix} />}
                </span>
              </motion.div>
            </div>
            <div className="stat-footer">
              <span className="stat-percentage">
                {isVisible && `${Math.round((stat.value / stat.maxValue) * 100)}%`}
              </span>
              <span className="stat-max">
                Goal: {stat.prefix}{stat.maxValue.toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgressStats; 