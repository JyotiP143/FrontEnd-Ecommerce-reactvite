export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-blue-600">ShopX</span>
          </h1>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions, feedback, or need help with an order?
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10
                          hover:-translate-y-1 transition animate-slideUp">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  📍
                </span>
                <p>
                  <span className="font-medium block">Address</span>
                  123 Market Street, Mumbai, India
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  📧
                </span>
                <p>
                  <span className="font-medium block">Email</span>
                  support@shopx.com
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  📞
                </span>
                <p>
                  <span className="font-medium block">Phone</span>
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="mt-10 p-5 bg-blue-50 rounded-2xl">
              <p className="font-medium text-gray-700">Support Hours</p>
              <p className="text-gray-600 text-sm mt-1">
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-10
                          hover:-translate-y-1 transition animate-slideUp delay-150">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl
                           font-semibold hover:bg-blue-700 hover:scale-[1.02]
                           active:scale-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
