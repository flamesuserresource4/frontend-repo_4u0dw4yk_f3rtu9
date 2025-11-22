const images = [
  'https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604908177077-d4c2baf8b4a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Food" className="w-full h-48 md:h-60 object-cover rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
