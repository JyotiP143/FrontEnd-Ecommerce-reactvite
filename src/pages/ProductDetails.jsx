import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const ProductGrid = ({ search, category }) => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-56 w-full object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="font-bold mt-2">₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
