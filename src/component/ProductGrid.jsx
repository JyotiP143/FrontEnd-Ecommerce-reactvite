import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, loading } = useProducts();

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductGrid;