import { useState } from 'react'
import '../App.css'
import GenderModal from './GenderModal'
import MaleQuestions from './MaleQuestions'
import FemaleQuestions from './FemaleQuestions'

function UserInput({ onSave }) {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value
    setGender(selectedGender)
    setModalData(null)
    setIsModalOpen(true)
  }

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !country.trim() || !gender || !modalData) {
      setError('Please fill in all fields, including gender-specific questions.')
      return
    }
    setError('')
    onSave({ name: name.trim(), country: country.trim(), gender, ...modalData })
  }

  return (
    <section id="center" className="contact-section">
      <h1>Input Info</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" required value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select value={gender} onChange={handleGenderChange} required className="form-group input">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className="counter" style={{ width: '100%', marginTop: '10px' }}>
          Save
        </button>
      </form>

      <GenderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`${gender} Questions`} userName={name}>
        {gender === 'male' && <MaleQuestions onSave={(data) => { setModalData(data); setIsModalOpen(false); }} />}
        {gender === 'female' && <FemaleQuestions onSave={(data) => { setModalData(data); setIsModalOpen(false); }} />}
      </GenderModal>
    </section>
  )
}

export default UserInput;
