import CartItem from "../component/CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Shopping Cart
          </h2>
          <p className="text-gray-600 mt-2">
            Review your items before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <p className="text-lg text-gray-600 mb-4">
              🛒 Your cart is empty
            </p>
            <p className="text-gray-500">
              Looks like you haven’t added anything yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">
              <h3 className="text-xl font-semibold mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                className="w-full mt-6 py-3 bg-green-600 text-white
                           rounded-xl font-medium hover:bg-green-700
                           transition transform hover:scale-[1.02]"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Secure checkout · Easy returns
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
