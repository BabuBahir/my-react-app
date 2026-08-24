import '../App.css'

function AboutMe({ onNavigate }) {
  return (
    <>
      <section id="center" className="about-section">
        <div>
          <h1>About Me</h1>
          <p className="subtitle">Passionate developer crafting modern web experiences</p>
        </div>
        <div className="about-content">
          <p>
            Hi! I am a software engineer dedicated to building clean, accessible, and high-performance applications. 
            I enjoy bridging the gap between design and development, translating complex ideas into elegant, 
            interactive user interfaces.
          </p>
          <p>
            Leveraging modern technologies like React, Vite, and CSS, I build applications that are not only 
            functional but also highly performant and user-friendly.
          </p>
        </div>
        
        <div className="skills-container">
          <h2>My Skillset</h2>
          <div className="skills-grid">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript (ES6+)</span>
            <span className="skill-badge">HTML5 & CSS3</span>
            <span className="skill-badge">Vite</span>
            <span className="skill-badge">Git & GitHub</span>
            <span className="skill-badge">Responsive Design</span>
          </div>
        </div>

        <button 
          type="button" 
          className="counter" 
          style={{ marginTop: '32px' }}
          onClick={() => onNavigate('contact')}
        >
          Get in touch
        </button>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default AboutMe;
