import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard= ({ product })=> {
  const { dispatch } = useCart();

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-52 w-full object-cover rounded-lg transform hover:scale-110 transition duration-300"
          />
        </div>

        <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </Link>

      <button
        className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => dispatch({ type: "ADD", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;