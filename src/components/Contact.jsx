import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Thanks! We will get back soon.')
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Location & Contact</h2>
            <p className="text-gray-700 mb-6">Find us at the heart of the neighborhood. Call us to pre-order or drop a message!</p>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31527.05657614206!2d85.29624885!3d27.7083173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b77d8a53cf%3A0x4b7d4c2e5d9b9b3a!2sStreet%20Food!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-pink-50">📞 <span className="font-semibold">+91 98765 43210</span></div>
              <div className="p-4 rounded-lg bg-yellow-50">🕒 <span className="font-semibold">10:00 AM – 9:30 PM</span></div>
              <div className="p-4 rounded-lg bg-green-50">📍 <span className="font-semibold">Near City Market</span></div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a message</h3>
            <div className="grid gap-4">
              <input
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                placeholder="Your message"
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg shadow-pink-600/20 transition"
              >
                Send Message
              </button>
              {status && <p className="text-green-700 text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
