import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide">
          ShopX
        </NavLink>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink to="/"  className={({ isActive }) =>`hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800"}`}>Home</NavLink>
          <NavLink to="/wishlist" className={({isActive}) => `hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800"}`}>Wishlist</NavLink>
          <NavLink to="/about" className={({isActive}) => `hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800"}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800"}`}>Contact</NavLink>

        </div>


        {/* Cart Button */}
        <NavLink to="/cart" className="relative">
          <span className="text-xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>

      </div>
    </nav>
  );
}
export default Navbar;