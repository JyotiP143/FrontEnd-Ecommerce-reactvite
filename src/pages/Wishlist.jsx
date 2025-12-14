// import ProductCard from "../component/ProductCard";
// import { useWishlist } from "../context/WishlistContext";

const Wishlist = ()=> {
  // const { wishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

      {/* {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )} */}
    </div>
  );
}
export default Wishlist ;
