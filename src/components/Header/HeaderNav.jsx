import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaRegHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center sm:p-4 p-2 relative z-10 shadow-md">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          JEWELRY
        </Link>
      </div>

      <nav className="hidden sm:flex space-x-6">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/product" className="hover:text-gray-500">
          Product
        </Link>
        <Link to="/about" className="hover:text-gray-500">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-500">
          Contact
        </Link>
      </nav>

      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex items-center space-x-5">
          <FaSearch className="hover:text-gray-500 cursor-pointer" />
          <FaUser className="hover:text-gray-500 cursor-pointer" />
          <FaRegHeart className="hover:text-gray-500 cursor-pointer" />
          <FaShoppingBag className="hover:text-gray-500 cursor-pointer" />
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="hover:text-gray-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/product"
              className="hover:text-gray-500"
              onClick={toggleMenu}
            >
              Product
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-500"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex justify-around pt-4 border-t border-gray-200">
              <FaSearch className="hover:text-gray-500 cursor-pointer" />
              <FaUser className="hover:text-gray-500 cursor-pointer" />
              <FaRegHeart className="hover:text-gray-500 cursor-pointer" />
              <FaShoppingBag className="hover:text-gray-500 cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
