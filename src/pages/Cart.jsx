import CartItem from "../component/CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-semibold">Total: ₹{total}</h3>
            <button className="mt-3 px-6 py-3 bg-green-600 text-white rounded-lg">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;