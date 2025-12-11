import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const existing = state.find(i => i.id === action.payload.id);
      if (existing) {
        return state.map(i =>
          i.id === action.payload.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE":
      return state.filter(i => i.id !== action.payload);

    case "INCREASE":
      return state.map(i =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );

    case "DECREASE":
      return state.map(i =>
        i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
      ).filter(i => i.qty > 0);

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
