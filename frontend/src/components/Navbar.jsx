import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            EstateX
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/properties"
            className="hover:text-blue-600 transition"
          >
            Properties
          </Link>

          <Link
            to="#"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            to="#"
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>

        </div>

        {/* Buttons */}
        <div className="space-x-4">

          <Link to="/login">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Register
            </button>
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;