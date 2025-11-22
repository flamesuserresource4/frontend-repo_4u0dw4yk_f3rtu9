const categories = [
  {
    name: 'Snacks',
    color: 'bg-yellow-50',
    items: [
      { name: 'Samosa (2 pcs)', price: 60 },
      { name: 'Pani Puri', price: 80 },
      { name: 'Aloo Tikki', price: 70 },
    ],
  },
  {
    name: 'Momo',
    color: 'bg-pink-50',
    items: [
      { name: 'Veg Steam Momo', price: 120 },
      { name: 'Veg Fried Momo', price: 140 },
      { name: 'Paneer Momo', price: 160 },
    ],
  },
  {
    name: 'Chowmein',
    color: 'bg-green-50',
    items: [
      { name: 'Veg Chowmein', price: 110 },
      { name: 'Schezwan Chowmein', price: 130 },
      { name: 'Paneer Chowmein', price: 150 },
    ],
  },
  {
    name: 'Fried Items',
    color: 'bg-orange-50',
    items: [
      { name: 'Crispy Fries', price: 90 },
      { name: 'Veg Pakora', price: 100 },
      { name: 'Spring Rolls', price: 120 },
    ],
  },
  {
    name: 'Drinks',
    color: 'bg-blue-50',
    items: [
      { name: 'Masala Lemonade', price: 60 },
      { name: 'Iced Tea', price: 70 },
      { name: 'Bubble Tea', price: 160 },
    ],
  },
]

export default function Menu() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className={`${cat.color} rounded-xl p-6 border border-gray-100`}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between text-gray-800">
                    <span>{item.name}</span>
                    <span className="font-semibold text-pink-700">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
