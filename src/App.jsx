import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import SectionReveal from './components/SectionReveal'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <SectionReveal>
          <Features />
        </SectionReveal>
        <SectionReveal>
          <Pricing />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
