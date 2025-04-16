import React, { useState } from "react";
import "./TravelPlan.css";
import parisImage from "../assets/paris.jpg";
import nyImage from "../assets/ny.jpg";
import santoriniImage from "../assets/santorini.jpg";

const destinations = [
  {
    city: "Paris, France",
    image: parisImage,  // Use the imported image
    description: "Experience the romantic city of lights with its iconic Eiffel Tower, museums, and cafes.",
    spots: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    hotels: ["Ritz Paris", "Le Meurice", "Hôtel Plaza Athénée"],
    flights: ["Air France", "Delta Airlines", "British Airways"],
    estimatedCostPerDay: 250,
  },
  {
    city: "New York, USA",
    image: nyImage,  // Use the imported image
    description: "Visit the bustling streets of NYC, home to Times Square, Central Park, and Broadway.",
    spots: ["Statue of Liberty", "Times Square", "Central Park"],
    hotels: ["The Plaza", "The Standard", "Marriott Marquis"],
    flights: ["United Airlines", "American Airlines", "JetBlue"],
    estimatedCostPerDay: 300,
  },
  {
    city: "Santorini, Greece",
    image: santoriniImage,  // Use the imported image
    description: "Relax on the beautiful beaches of Santorini with its stunning sunsets and blue-domed churches.",
    spots: ["Oia Village", "Red Beach", "Akrotiri Ruins"],
    hotels: ["Katikies Hotel", "Canaves Oia", "Mystique Hotel"],
    flights: ["Aegean Airlines", "Emirates", "Turkish Airlines"],
    estimatedCostPerDay: 280,
  },
];


const TravelPlan = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [trip, setTrip] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true);

  const handlePlanTrip = () => {
    if (!selectedCity || !budget || !days) {
      setIsValidForm(false);
      return;
    }
    const cityData = destinations.find((dest) => dest.city === selectedCity);
    if (cityData) {
      const totalCost = cityData.estimatedCostPerDay * days;
      setTrip({
        ...cityData,
        totalCost,
        affordable: totalCost <= budget,
      });
    }
  };

  return (
    <div className="travel-container">
      <h1 className="travel-title">Plan Your Dream Trip ✈️</h1>
      

      <div className="trip-options">
        <button className="create-new-btn" onClick={() => setTrip(null)}>
          Create New Plan
        </button>
        <button className="choose-existing-btn" onClick={() => alert("Feature coming soon!")}>
          Choose Existing Plan
        </button>
      </div>

      <div className="trip-form">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a Destination</option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest.city}>{dest.city}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter Budget ($)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button className="plan-btn" onClick={handlePlanTrip}>
          Plan My Trip
        </button>
        {!isValidForm && <p className="error-message">Please fill out all fields correctly!</p>}
      </div>

      {trip && (
        <div className="trip-summary show">
          <div className="destination-card">
            <img src={trip.image} alt={trip.city} className="destination-image" />
            <div className="destination-card-content">
              <h2 className="destination-title">Your Trip to {trip.city} 🌍</h2>
              <p className="destination-description">{trip.description}</p>

              <div className="trip-info">
                <h3>Top Attractions:</h3>
                <ul>
                  {trip.spots.map((spot, i) => <li key={i}>{spot}</li>)}
                </ul>

                <h3>Recommended Hotels:</h3>
                <ul>
                  {trip.hotels.map((hotel, i) => <li key={i}>{hotel}</li>)}
                </ul>

                <h3>Flights Available:</h3>
                <ul>
                  {trip.flights.map((flight, i) => <li key={i}>{flight}</li>)}
                </ul>

                <h3 className="total-cost">
                  Total Estimated Cost: ${trip.totalCost}{" "}
                  {trip.affordable ? "✅ (Fits your budget!)" : "❌ (Over budget!)"}
                </h3>

                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelPlan;
