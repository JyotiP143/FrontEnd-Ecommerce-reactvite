export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            About <span className="text-blue-600">ShopX</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your one-stop destination for stylish fashion, quality products, and a smooth shopping experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Text Section */}
          <div className="space-y-6 animate-slideUp">
            <h2 className="text-2xl font-semibold text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
              ShopX is a modern eCommerce platform designed to bring you the latest trends in fashion and lifestyle.
              We focus on clean design, fast performance, and an enjoyable shopping journey.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Built using cutting-edge technologies like React and Tailwind CSS, ShopX delivers a seamless experience
              across all devices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
                <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-500 text-sm mt-1">Products</p>
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="relative animate-slideUp delay-150">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Why Choose ShopX?
              </h3>

              <ul className="space-y-4">
                {[
                  "Modern & fast UI experience",
                  "High-quality fashion products",
                  "Secure checkout & easy returns",
                  "Mobile-first responsive design",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">
            Experience Shopping the Smart Way
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of customers who trust ShopX for quality and style.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full 
            hover:bg-blue-700 hover:scale-105 active:scale-95 transition">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
