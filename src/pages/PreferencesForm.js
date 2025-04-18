import React, { useState } from 'react';
import './PreferencesForm.css';

const PreferencesForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    duration: '',
    budget: '',
    preferences: {
      culture: false,
      nature: false,
      food: false,
      adventure: false,
      relaxation: false,
      shopping: false,
    },
  });

  const [itinerary, setItinerary] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [name]: checked,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock itinerary generation
    const mockItinerary = {
      day1: {
        morning: 'Visit local museum and historical sites',
        afternoon: 'Lunch at traditional restaurant',
        evening: 'Cultural show and dinner',
      },
      day2: {
        morning: 'Nature hike and scenic views',
        afternoon: 'Local market visit',
        evening: 'Relax at spa',
      },
    };
    setItinerary(mockItinerary);
  };

  return (
    <div className="preferences-container">
      <div className="preferences-box">
        <h2>Plan Your Trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="Where do you want to go?"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (days)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                min="1"
                placeholder="Number of days"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget (USD)</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              min="0"
              placeholder="Your budget in USD"
            />
          </div>

          <div className="preferences-group">
            <h3>Your Interests</h3>
            <div className="preferences-grid">
              {Object.entries(formData.preferences).map(([key, value]) => (
                <label key={key} className="preference-item">
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handleChange}
                  />
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-button">
            Generate Itinerary
          </button>
        </form>

        {itinerary && (
          <div className="itinerary-container">
            <h3>Your 2-Day Itinerary</h3>
            <div className="itinerary-days">
              {Object.entries(itinerary).map(([day, activities]) => (
                <div key={day} className="itinerary-day">
                  <h4>{day === 'day1' ? 'Day 1' : 'Day 2'}</h4>
                  <div className="activities">
                    <div className="activity">
                      <strong>Morning:</strong> {activities.morning}
                    </div>
                    <div className="activity">
                      <strong>Afternoon:</strong> {activities.afternoon}
                    </div>
                    <div className="activity">
                      <strong>Evening:</strong> {activities.evening}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="itinerary-actions">
              <button className="action-button edit">Edit Preferences</button>
              <button className="action-button regenerate">Regenerate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreferencesForm; 