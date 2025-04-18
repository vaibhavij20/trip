import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('saved');

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

  const renderContent = () => {
    switch (activeTab) {
      case 'saved':
        return (
          <div className="content-section">
            <h2>Saved Itineraries</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Paris Adventure</h3>
                <p>5-day trip to Paris with cultural activities</p>
                <div className="card-actions">
                  <button className="action-button view">View</button>
                  <button className="action-button delete">Delete</button>
                </div>
              </div>
              <div className="content-card">
                <h3>Tokyo Exploration</h3>
                <p>7-day trip to Tokyo with food tour</p>
                <div className="card-actions">
                  <button className="action-button view">View</button>
                  <button className="action-button delete">Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'past':
        return (
          <div className="content-section">
            <h2>Past Trips</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Bali Retreat</h3>
                <p>Completed: March 2024</p>
                <div className="card-actions">
                  <button className="action-button view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'upcoming':
        return (
          <div className="content-section">
            <h2>Upcoming Bookings</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>New York City</h3>
                <p>Departure: April 15, 2024</p>
                <div className="card-actions">
                  <button className="action-button view">View Details</button>
                  <button className="action-button cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'journals':
        return (
          <div className="content-section">
            <h2>Shared Journals</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>European Adventure</h3>
                <p>Shared with: 5 friends</p>
                <div className="card-actions">
                  <button className="action-button view">View Journal</button>
                  <button className="action-button share">Share More</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Itineraries
          </button>
          <button
            className={`nav-item ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Trips
          </button>
          <button
            className={`nav-item ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Bookings
          </button>
          <button
            className={`nav-item ${activeTab === 'journals' ? 'active' : ''}`}
            onClick={() => setActiveTab('journals')}
          >
            Shared Journals
          </button>
        </nav>
      </div>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard; 