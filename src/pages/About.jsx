export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About <span className="text-blue-600">ShopX</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for stylish fashion, quality products, and a smooth shopping experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div className="space-y-6">
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

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">10k+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>
            </div>
          </div>

          {/* Image / Card Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose ShopX?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">✔</span>
                  Modern & fast UI experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">✔</span>
                  High-quality fashion products
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">✔</span>
                  Secure checkout & easy returns
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">✔</span>
                  Mobile-first responsive design
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Experience Shopping the Smart Way
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of customers who trust ShopX for quality and style.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
