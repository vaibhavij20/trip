import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri 9am-6pm'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'info@trippy.com',
      subInfo: '24/7 Online Support'
    },
    {
      icon: '📍',
      title: 'Location',
      info: '123 Travel Street',
      subInfo: 'New York, NY 10001'
    }
  ];

  return (
    <div className="contact-page">
      <motion.div
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Us</h1>
        <p>Get in touch with our travel experts</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Get In Touch</h2>
          <p>Have questions about your trip? We're here to help!</p>
          
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <span className="info-icon">{info.icon}</span>
                <h3>{info.title}</h3>
                <p>{info.info}</p>
                <span className="sub-info">{info.subInfo}</span>
              </motion.div>
            ))}
          </div>

          <div className="social-links">
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;