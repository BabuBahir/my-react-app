import { useState } from 'react';
import '../App.css';

function MaleQuestions({ onSave }) {
  const [sport, setSport] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sport.trim() && age.trim()) {
      onSave({ sport: sport.trim(), age: age.trim() });
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label>Favorite Sport</label>
        <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} placeholder="Enter Sport" required />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" required />
      </div>
      <button type="submit" className="counter">Save</button>
    </form>
  );
}

export default MaleQuestions;
