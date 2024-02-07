import './app.scss'
import Navbar from './components/navbar/Navbar.tsx'
import Hero from './components/hero/Hero.tsx'
import Parallax from './components/parallax/Parallax.tsx'
import Services from './components/services/Services.tsx'

import Portfolio from './components/portfolio/Portfolio.tsx'
import Contact from './components/contact/Contact.tsx'
import Cursor from './components/cursor/Cursor.tsx'
import About from './components/about/About.tsx'

function App() {
  return (
    <div className="main">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>

      <About />
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
