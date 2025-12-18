import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 transition
     ${
       isActive
         ? "text-blue-600"
         : "text-gray-700 hover:text-blue-600"
     }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide text-gray-900"
        >
          Shop<span className="text-blue-600">X</span>
        </NavLink>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/wishlist", label: "Wishlist" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <NavLink key={path} to={path} className={linkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                      bg-blue-600 transform transition-all duration-300
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Cart */}
        <NavLink to="/cart" className="relative group">
          <span className="text-2xl transition group-hover:scale-110">🛒</span>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white
                             text-xs w-5 h-5 flex items-center justify-center
                             rounded-full animate-bounce">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
