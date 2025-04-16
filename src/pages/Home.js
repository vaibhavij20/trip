import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import InfluencerReviews from "../components/InfluencerReviews";
import Footer from "../components/Footer";
import ExploreSection from "../components/ExploreSection";
import { motion } from 'framer-motion';

const exploreItems = [
  { image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=3150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Bangkok's Best Hotels", price: 299 },
  { image: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tokyo Travel Guide", price: 450 },
  { image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Paris: Must-See Places", price: 520 },
  { image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Explore London", price: 399 },
  { image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Bali's Hidden Gems", price: 289 },
];

const popularDestinations = [
  {
    id: 1,
    name: "Maldives Paradise",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=3271&auto=format&fit=crop",
    description: "Crystal clear waters and overwater bungalows",
    price: "From $899"
  },
  {
    id: 2,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=3213&auto=format&fit=crop",
    description: "Majestic mountains and scenic beauty",
    price: "From $799"
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=3000&auto=format&fit=crop",
    description: "Stunning sunsets and white architecture",
    price: "From $699"
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=3038&auto=format&fit=crop",
    description: "Tropical paradise with rich culture",
    price: "From $599"
  },
  {
    id: 5,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=3271&auto=format&fit=crop",
    description: "Modern city meets ancient traditions",
    price: "From $999"
  },
  {
    id: 6,
    name: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=3270&auto=format&fit=crop",
    description: "Romantic canals and historic architecture",
    price: "From $749"
  }
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSearchResults(true);

    // Simulate API call
    setTimeout(() => {
      const filteredResults = exploreItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 1000);
  };

  const categories = [
    {
      id: 1,
      title: 'Beach Getaways',
      icon: '🏖️',
      path: '/beach-getaways',
      description: 'Relax on pristine beaches'
    },
    {
      id: 2,
      title: 'Mountain Adventures',
      icon: '🏔️',
      path: '/mountain-adventures',
      description: 'Explore majestic peaks'
    },
    {
      id: 3,
      title: 'City Breaks',
      icon: '🌆',
      path: '/city-breaks',
      description: 'Experience urban excitement'
    },
    {
      id: 4,
      title: 'Cultural Tours',
      icon: '🏛️',
      path: '/cultural-tours',
      description: 'Discover rich heritage'
    },
    {
      id: 5,
      title: 'Wildlife Safaris',
      icon: '🦁',
      path: '/wildlife-safaris',
      description: 'Meet amazing animals'
    },
    {
      id: 6,
      title: 'Road Trips',
      icon: '🚗',
      path: '/road-trips',
      description: 'Journey through landscapes'
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="home">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find the perfect destination for your dream vacation
          </motion.h1>
          
          <motion.div 
            className="search-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search destinations, activities, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i> Search
              </button>
            </form>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id} 
                className="category-card"
                onClick={() => navigate(category.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="cta-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              className="cta-button"
              onClick={() => navigate('/trip-planner')}
            >
              Plan Your Trip Now
            </button>
          </motion.div>
        </div>
      </motion.div>

      {showSearchResults && (
        <motion.div 
          className="search-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Search Results</h2>
          <div className="results-grid">
            {searchResults.map((result, index) => (
              <motion.div 
                key={index}
                className="result-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={result.image} alt={result.title} />
                <h3>{result.title}</h3>
                <p>Starting from ${result.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.section 
        className="popular-destinations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Popular Destinations</h2>
        <div className="destinations-scroll">
          <motion.div 
            className="destinations-container"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="destination-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-info">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <p className="destination-price">{destination.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="scroll-indicator">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`scroll-dot ${i === 0 ? 'active' : ''}`} />
          ))}
        </div>
      </motion.section>

      <ExploreSection exploreItems={exploreItems} />
      <InfluencerReviews />
    </div>
  );
}

export default Home;
