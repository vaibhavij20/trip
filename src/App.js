import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotificationBanner from "./components/NotificationBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import TripPlanner from "./pages/TripPlanner";
import TravelGallery from "./pages/TravelGallery";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import TravelPlan from "./pages/TravelPlan"; 

import "./App.css";

// FontAwesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <Router>
      <div>
        <NotificationBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/travelPlan" element={<TravelPlan />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/travel-gallery" element={<TravelGallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
