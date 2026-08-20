import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Interests from './components/Interests/Interests'
import Footer from './components/Footer/Footer'
import SectionDivider from './components/SectionDivider/SectionDivider'

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
        <SectionDivider text="what i've done" />
        <Experience />
        <SectionDivider text="what i've built" />
        <Projects />
        <SectionDivider text="tools & technologies" />
        <Skills />
        <SectionDivider text="how i can help" />
        <Services />
        <SectionDivider text="academic journey" />
        <Education />
        <SectionDivider text="verified credentials" />
        <Certifications />
        <SectionDivider text="let's work together" />
        <Contact />
      </main>
      <Interests />
      <Footer />
    </>
  )
}

export default App
