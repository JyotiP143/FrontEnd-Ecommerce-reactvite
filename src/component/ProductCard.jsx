import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative">
        <img
         src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow">
          {product.category}
        </span>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          {/* <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {product.name}
          </h3> */}
        </Link>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button
            onClick={() => dispatch({ type: "ADD", payload: product })}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
