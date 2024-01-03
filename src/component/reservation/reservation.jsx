import React, { useState } from "react";
import './reservation.css';

const Reservation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    guests: "2 Guests",
    date: "Today",
    time: "All Day",
    diningLocation: "Dining Room",
  });
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setIsFormOpen(false); 
    setIsConfirmationVisible(true); 
  };

  return (
    <div className="reservation">
      <h1>RESERVATIONS</h1>
      <p>
        Pull up a chair and stay a while! We’re excited to offer both indoor and outdoor seating weather permitting. Book your table now.
      </p>
      <button onClick={handleFormOpen} className="open-form-button">
        Make a Reservation
      </button>

      {isFormOpen && (
        <div className="reservation-form">
          <h2>Make a Reservation</h2>
          <form>
            <div className="form-group">
              <label>Guests</label>
              <select name="guests" value={formData.guests} onChange={handleInputChange}>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <select name="time" value={formData.time} onChange={handleInputChange}>
                <option value="All Day">All Day</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <div className="form-group">
              <label>Dining Location</label>
              <select name="diningLocation" value={formData.diningLocation} onChange={handleInputChange}>
                <option value="Dining Room">Dining Room</option>
                <option value="OUT DOOR">Out DOOR</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit Reservation</button>
          </form>
        </div>
      )}

      {isConfirmationVisible && (
        <div className="confirmation-message">
          <h2>Reservation Confirmed!</h2>
          <p>Details:</p>
          <ul>
            <li>Guests: {formData.guests}</li>
            <li>Date: {formData.date}</li>
            <li>Time: {formData.time}</li>
            <li>Dining Location: {formData.diningLocation}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reservation;
