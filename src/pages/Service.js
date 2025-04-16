import React from 'react';
import { motion } from 'framer-motion';
import './Service.css';

const services = [
  {
    id: 1,
    icon: '✈️',
    title: 'Flight Booking',
    description: 'Find the best deals on flights worldwide with our advanced booking system',
    features: ['Price alerts', '24/7 support', 'Flexible booking', 'Best price guarantee']
  },
  {
    id: 2,
    icon: '🏨',
    title: 'Hotel Reservations',
    description: 'Book luxury hotels, resorts, and apartments at competitive prices',
    features: ['Free cancellation', 'Price matching', 'Verified reviews', 'Special deals']
  },
  {
    id: 3,
    icon: '🚗',
    title: 'Car Rentals',
    description: 'Rent vehicles from trusted providers for your perfect road trip',
    features: ['All inclusive rates', 'Free cancellation', 'Worldwide coverage', '24/7 support']
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Custom Tour Packages',
    description: 'Personalized travel packages tailored to your preferences',
    features: ['Expert planning', 'Local guides', 'Flexible itineraries', 'Group discounts']
  },
  {
    id: 5,
    icon: '🎫',
    title: 'Activity Bookings',
    description: 'Book tours, attractions, and activities at your destination',
    features: ['Skip the line', 'Mobile tickets', 'Instant confirmation', 'Best price guarantee']
  },
  {
    id: 6,
    icon: '🏥',
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance for worry-free journeys',
    features: ['Medical coverage', 'Trip cancellation', '24/7 assistance', 'Lost baggage protection']
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="feature-list">
        {service.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.1) + (i * 0.1) }}
          >
            <span className="feature-bullet">•</span> {feature}
          </motion.li>
        ))}
      </ul>
      <motion.button
        className="service-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

function Service() {
  return (
    <div className="service-page">
      <motion.div
        className="service-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Our Services</h1>
        <p>Discover the perfect travel services for your next adventure</p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <motion.div
        className="service-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2>Need Custom Travel Solutions?</h2>
        <p>Contact our travel experts for personalized service packages</p>
        <button className="cta-button">Contact Us</button>
      </motion.div>
    </div>
  );
}

export default Service;
