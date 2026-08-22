import { useState } from 'react'
import '../App.css'

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <>
      <section id="center" className="contact-section">
        <div>
          <h1>Contact Us</h1>
          <p className="subtitle">Let's build something amazing together!</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been received. I'll get back to you as soon as possible.</p>
            <button 
              type="button" 
              className="counter" 
              style={{ marginTop: '20px' }} 
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', message: '' })
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="counter" style={{ width: '100%', marginTop: '10px' }}>
              Send Message
            </button>
          </form>
        )}
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default ContactUs;
