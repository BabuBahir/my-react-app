import { useState } from 'react';
import '../App.css';

function FemaleQuestions({ onSave }) {
  const [hobby, setHobby] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hobby.trim() && city.trim()) {
      onSave({ hobby: hobby.trim(), city: city.trim() });
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label>Favorite Hobby</label>
        <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Enter Hobby" required />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" required />
      </div>
      <button type="submit" className="counter">Save</button>
    </form>
  );
}

export default FemaleQuestions;
