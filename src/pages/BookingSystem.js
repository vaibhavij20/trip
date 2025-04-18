import React, { useState } from 'react';
import './BookingSystem.css';

const BookingSystem = () => {
  const [formData, setFormData] = useState({
    travelType: 'flight',
    source: '',
    destination: '',
    date: '',
  });

  const [searchResults, setSearchResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock search results
    const mockResults = {
      flight: [
        {
          id: 1,
          name: 'Air Express',
          type: 'Economy',
          price: '$299',
          departure: '10:00 AM',
          arrival: '12:30 PM',
        },
        {
          id: 2,
          name: 'Sky Travel',
          type: 'Business',
          price: '$499',
          departure: '02:00 PM',
          arrival: '04:30 PM',
        },
      ],
      train: [
        {
          id: 1,
          name: 'Express Rail',
          type: 'First Class',
          price: '$99',
          departure: '08:00 AM',
          arrival: '11:30 AM',
        },
        {
          id: 2,
          name: 'Regional Rail',
          type: 'Standard',
          price: '$49',
          departure: '03:00 PM',
          arrival: '06:30 PM',
        },
      ],
      bus: [
        {
          id: 1,
          name: 'City Bus Lines',
          type: 'Premium',
          price: '$39',
          departure: '09:00 AM',
          arrival: '01:30 PM',
        },
        {
          id: 2,
          name: 'Express Bus',
          type: 'Standard',
          price: '$29',
          departure: '01:00 PM',
          arrival: '05:30 PM',
        },
      ],
    };

    setSearchResults(mockResults[formData.travelType]);
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Book Your Travel</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="travelType">Travel Type</label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              required
            >
              <option value="flight">Flight</option>
              <option value="train">Train</option>
              <option value="bus">Bus</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="source">From</label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
                placeholder="Enter source city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">To</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                placeholder="Enter destination city"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="date">Travel Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="search-button">
            Search Options
          </button>
        </form>

        {searchResults && (
          <div className="results-container">
            <h3>Available Options</h3>
            <div className="results-grid">
              {searchResults.map((result) => (
                <div key={result.id} className="result-card">
                  <div className="result-header">
                    <h4>{result.name}</h4>
                    <span className="type-badge">{result.type}</span>
                  </div>
                  <div className="result-details">
                    <div className="detail">
                      <span className="label">Departure:</span>
                      <span>{result.departure}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Arrival:</span>
                      <span>{result.arrival}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Price:</span>
                      <span className="price">{result.price}</span>
                    </div>
                  </div>
                  <button className="book-button">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSystem; 