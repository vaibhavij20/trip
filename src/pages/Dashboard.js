import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './Dashboard.css';
import ProgressStats from '../components/ProgressStats';

const Dashboard = () => {
  // Mock data for the user
  const userProfile = {
    name: "Alex Thompson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    level: "Adventure Seeker",
    totalTrips: 24,
    countriesVisited: 15,
    memberSince: "2022"
  };

  // Mock data for the travel spending graph
  const spendingData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 800 },
    { month: 'Mar', amount: 2200 },
    { month: 'Apr', amount: 1500 },
    { month: 'May', amount: 1800 },
    { month: 'Jun', amount: 2400 }
  ];

  // Mock data for travel categories
  const travelCategories = [
    { name: 'Beach', value: 35 },
    { name: 'Mountain', value: 25 },
    { name: 'City', value: 20 },
    { name: 'Cultural', value: 15 },
    { name: 'Adventure', value: 5 }
  ];

  // Mock data for destinations
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      rating: 4.8
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      rating: 4.9
    },
    {
      id: 3,
      name: "Santorini, Greece",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      rating: 4.7
    }
  ];

  const COLORS = ['#ffa500', '#ff8c00', '#ffb347', '#ffd700', '#ff7f50'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="dashboard">
      {/* User Profile Section */}
      <motion.div 
        className="profile-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-card" variants={itemVariants}>
          <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
          <h2>{userProfile.name}</h2>
          <p className="level">{userProfile.level}</p>
          <div className="profile-stats">
            <div>
              <h3>{userProfile.totalTrips}</h3>
              <p>Trips</p>
            </div>
            <div>
              <h3>{userProfile.countriesVisited}</h3>
              <p>Countries</p>
            </div>
            <div>
              <h3>{userProfile.memberSince}</h3>
              <p>Member Since</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Progress Stats Section */}
      <ProgressStats />

      {/* Graphs Section */}
      <motion.div 
        className="graphs-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Spending Graph */}
        <motion.div className="graph-card" variants={itemVariants}>
          <h3>Travel Spending</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#ffa500" 
                fill="#ffa500" 
                fillOpacity={0.3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Travel Categories */}
        <motion.div className="graph-card" variants={itemVariants}>
          <h3>Travel Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={travelCategories}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {travelCategories.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Recent Destinations */}
      <motion.div 
        className="destinations-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Recent Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <motion.div 
              key={destination.id} 
              className="destination-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-rating">
                  ⭐ {destination.rating}
                </div>
              </div>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>{destination.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 