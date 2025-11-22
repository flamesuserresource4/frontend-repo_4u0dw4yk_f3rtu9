import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">Fresh • Fast • Flavorful</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-sm">
            Street Food Happiness in Every Bite
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
            Bold flavors, bright vibes. Your friendly neighborhood stall for tasty, affordable snacks and lightning-fast service.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-600/20 transition"
            >
              See Menu
            </Link>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/90 hover:bg-white text-pink-700 font-semibold border border-pink-200 transition"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
    </section>
  )
}
