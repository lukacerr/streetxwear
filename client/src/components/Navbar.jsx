// * REACT IMPORTS
import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';

// * ASSETS IMPORTS
import logo from '@/assets/logo.svg';
import { RiMenuLine } from 'react-icons/ri';
import { FiShoppingCart, FiMoon } from 'react-icons/fi';

// * CONTEXT IMPORTS
import CartContext from '@/contexts/cartContext';

// * COMMON IMPORTS
import { ToggleTheme } from '@/common/nightTheme';

// ! COMPONENT Navbar
function Navbar() {
  const cart = useContext(CartContext);

  return (
    <nav
      className="
        bg-black text-white 
        flex justify-between items-center 
        sticky top-0 z-50
        lg:px-16 sm:px-6 px-4
        py-4
      "
    >
      <Link to="/">
        <img
          title="STREETXWEAR"
          className="lg:h-12 sm:h-10 h-8 
          hover:scale-105 transform-gpu transition-transform duration-100"
          src={logo}
          alt="SXW"
        />
      </Link>

      <div className="flex md:gap-x-12 gap-x-4 lg:flex-row flex-row-reverse items-center">
        <RiMenuLine
          className="md:text-4xl sm:text-3xl text-2xl 
          lg:hidden block
          hover:scale-110 hover:text-red cursor-pointer
          transform-gpu transition-all duration-100"
        ></RiMenuLine>

        <ul
          className="
          md:gap-x-12 gap-x-4 
          lg:flex hidden
          items-center lg:flex-row flex-col 
          font-poppins text-xl font-medium uppercase tracking-wide
        "
        >
          <li className="hover:border-b-4 border-red transition-all duration-75">
            <Link to="/about">
              <span>Contacto</span>
            </Link>
          </li>

          <li className="hover:border-b-4 border-red transition-all duration-75">
            <Link to="/items">
              <span>Productos</span>
            </Link>
          </li>

          <li className="hover:border-b-4 border-red transition-all duration-75">
            <Link to="/categories">
              <span>Categorías</span>
            </Link>
          </li>
        </ul>

        <FiMoon
          title="Cambiar tema"
          onClick={ToggleTheme}
          className="md:text-4xl sm:text-3xl text-2xl 
          hover:scale-110 hover:text-red cursor-pointer
          transform-gpu transition-all duration-100"
        ></FiMoon>

        <Link
          to="/cart"
          title="Carrito"
          className="
            flex items-center hover:scale-110   
          hover:text-red transform-gpu transition-all duration-100
          "
        >
          <span className="md:text-2xl sm:text-xl text-lg mx-1 text-red">
            {cart.map((x) => x.quantity).reduce((a, b) => a + b, 0)}
          </span>
          <FiShoppingCart className="md:text-4xl sm:text-3xl text-2xl"></FiShoppingCart>
        </Link>
      </div>
    </nav>
  );
}

// # COMPONENT EXPORT
export default memo(Navbar);
