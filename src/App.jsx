import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Interests from './components/Interests/Interests'
import Footer from './components/Footer/Footer'

function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <a href="#hero" className="skip-link">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Interests />
      <Footer />
    </>
  )
}

export default App
