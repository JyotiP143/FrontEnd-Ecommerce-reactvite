import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-4 border-b pb-4 mb-4">
      <img
        src={item.image}
          alt={item.title}
        className="w-28 h-28 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-between w-full">
        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">₹{item.price}</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
          >
            -
          </button>

          <span>{item.qty}</span>

          <button
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
          >
            +
          </button>

          <button
            className="ml-auto text-red-500"
            onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem ;
