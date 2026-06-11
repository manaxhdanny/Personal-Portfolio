import About from './sections/About'
import Contact from './sections/Contact'
import Introduction from './sections/Introduction'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import TechnicalSkills from './sections/TechnicalSkills'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import selfPortrait from './assets/selfie.png'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <section className="intro-section" id="introduction">
        <div className="nav-wrapper">
          <Navbar />
        </div>
        <Introduction />
      </section>
      <section className="projects-section" id="projects">
        <Projects />
      </section>
      <section className="skills-section" id="skills">
        <TechnicalSkills />
      </section>
      <section className="about-section" id="about">
        <About />
      </section>
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
