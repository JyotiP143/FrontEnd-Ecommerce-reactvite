import ProductCard from "../component/ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, loading } = useProducts();

 if (loading) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 text-sm tracking-wide">
        Loading products...
      </p>
    </div>
  );
}


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
                <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductGrid;