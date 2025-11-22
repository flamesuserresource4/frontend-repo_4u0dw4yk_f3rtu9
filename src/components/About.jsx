export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We started as a small street-side stall with a big dream: bring joyful, mouthwatering snacks to our neighborhood at prices everyone can love. From sizzling tawa flavors to steamy momos and bubbly coolers, we serve fast without compromising taste.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our team is friendly, our kitchen is lively, and our food is made fresh all day. Whether you’re grabbing a quick bite or chilling with friends, we’ve got the perfect pick-me-up.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="Street food" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop" alt="Serving snacks" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" alt="Momo" className="rounded-xl w-full h-40 object-cover" />
            <img src="https://images.unsplash.com/photo-1585503913867-f3382c5d1122?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG93bWVpbnxlbnwwfDB8fHwxNzYzNzcyMjM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Chowmein" className="rounded-xl w-full h-40 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
