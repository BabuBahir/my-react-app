import { useState } from 'react'
import '../App.css'

function UserInput({ onSave }) {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && country.trim()) {
      onSave({ name: name.trim(), country: country.trim() })
    }
  }

  return (
    <section id="center" className="contact-section">
      <h1>Input Info</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country"
          />
        </div>
        <button type="submit" className="counter" style={{ width: '100%', marginTop: '10px' }}>
          Save
        </button>
      </form>
    </section>
  )
}

export default UserInput;
