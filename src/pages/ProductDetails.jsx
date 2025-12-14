import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find(p => p.id == id);
  const { dispatch } = useCart();

  if (!product)
    return <p className="text-center py-10">Product not found...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row gap-10">

      {/* Image Gallery */}
      <div className="flex-1">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-xl"
        />

        <div className="flex gap-3 mt-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <p className="text-2xl font-semibold mt-4">₹{product.price}</p>

        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => dispatch({ type: "ADD", payload: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
