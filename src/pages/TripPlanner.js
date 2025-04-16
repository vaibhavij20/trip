import React, { useState } from 'react';
import './TripPlanner.css';
import ProgressStats from '../components/ProgressStats';

function TripPlanner() {
  const [days, setDays] = useState([{ id: 1, activities: [] }]);
  const [newActivity, setNewActivity] = useState('');

  const addDay = () => {
    setDays([...days, { id: days.length + 1, activities: [] }]);
  };

  const addActivity = (dayId) => {
    if (newActivity.trim()) {
      setDays(days.map(day => {
        if (day.id === dayId) {
          return {
            ...day,
            activities: [...day.activities, newActivity.trim()]
          };
        }
        return day;
      }));
      setNewActivity('');
    }
  };

  const removeActivity = (dayId, activityIndex) => {
    setDays(days.map(day => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.filter((_, index) => index !== activityIndex)
        };
      }
      return day;
    }));
  };

  return (
    <div className="trip-planner">
      <h1>Trip Planner</h1>
      
      <ProgressStats />
      
      <div className="days-container">
        {days.map(day => (
          <div key={day.id} className="day-card">
            <h2>Day {day.id}</h2>
            <div className="activities-list">
              {day.activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <span>{activity}</span>
                  <button 
                    onClick={() => removeActivity(day.id, index)}
                    className="remove-activity"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="add-activity">
              <input
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="Add an activity..."
                onKeyPress={(e) => e.key === 'Enter' && addActivity(day.id)}
              />
              <button onClick={() => addActivity(day.id)}>Add</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={addDay} className="add-day-btn">
        Add New Day
      </button>
    </div>
  );
}

export default TripPlanner; 