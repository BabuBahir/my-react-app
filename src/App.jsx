import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import ContactUs from './components/ContactUs'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [count, setCount] = useState(0)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home count={count} setCount={setCount} />
      case 'about':
        return <AboutMe onNavigate={setCurrentPage} />
      case 'contact':
        return <ContactUs />
      default:
        return <Home count={count} setCount={setCount} />
    }
  }

  return (
    <>
      <nav className="navbar">
        <button 
          type="button" 
          className="navbar-brand" 
          onClick={() => setCurrentPage('home')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <img src={reactLogo} alt="Logo" />
          <span>My App</span>
        </button>
        <ul className="navbar-links">
          <li>
            <button
              type="button"
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentPage === 'about' ? 'active' : ''}
              onClick={() => setCurrentPage('about')}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={() => setCurrentPage('contact')}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>

      {renderPage()}
    </>
  )
}

export default App
