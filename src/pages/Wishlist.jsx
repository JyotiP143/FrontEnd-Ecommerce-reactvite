import { Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          ❤️ My Wishlist
        </h2>
        <span className="text-sm text-gray-500">
          {wishlist.length} items
        </span>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-6xl mb-4">💔</span>
          <p className="text-gray-600 text-lg mb-4">
            Your wishlist is empty
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
