import React, { useState } from 'react';
import './NotificationBanner.css';

function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    "🎉 20% off for Maldives till Friday! Book now!",
    "✨ Special offer: Book 2 nights, get 1 night free in Bali!",
    "🌴 Early bird discount: 15% off on all summer destinations!",
    "✈️ Limited time offer: Free airport transfer with any booking!"
  ];

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleNext = () => {
    setCurrentNotification((prev) => (prev + 1) % notifications.length);
  };

  if (!isVisible) return null;

  return (
    <div className="notification-banner">
      <div className="notification-content">
        <span className="notification-text">{notifications[currentNotification]}</span>
        <div className="notification-controls">
          <button className="next-notification" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button className="close-notification" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationBanner; 