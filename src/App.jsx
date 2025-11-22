import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} StreetFlavors — Fresh • Fast • Flavorful
      </footer>
    </div>
  )
}

export default App
