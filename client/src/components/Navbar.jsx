import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { TailSpin } from 'react-loader-spinner';

import { RiMenuLine } from 'react-icons/ri';
import { FiShoppingCart, FiMoon } from 'react-icons/fi';
import logo from '@/assets/logo.svg';

import CartContext from '@/contexts/cartContext';
import { ToggleTheme } from '@/common/nightTheme';

import { GetCategories } from '@/daos/categoriesDao';

function Navbar(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const cart = useContext(CartContext);

  useEffect(() => {
    GetCategories()
      .then((query) => {
        if (query.error) setError(true);
        else setData(query.data);
      })
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  if (isLoading)
    return (
      <section className="flex items-center justify-center">
        <TailSpin color="#f62937" height={200} width={200} />
      </section>
    );

  if (error) return <span>error</span>;
  if (!data.length) return <span>no se han encontrado datos</span>;

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
          flex items-center lg:flex-row flex-col 
          md:gap-x-12 gap-x-4 
          lg:flex hidden
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

          {/*
          {data.map((x) => (
            <li key={x.id} className="hover:border-b-4 border-red transition-all duration-75">
              <Link to={'/categories/' + x.id}>
                <span className="font-poppins text-xl">{x.name}</span>
              </Link>
            </li>
          ))}
          */}
        </ul>

        <FiMoon
          onClick={ToggleTheme}
          className="md:text-4xl sm:text-3xl text-2xl 
          hover:scale-110 hover:text-red cursor-pointer
          transform-gpu transition-all duration-100"
        ></FiMoon>

        <Link
          to="/cart"
          className="flex items-center hover:scale-110   
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

export default Navbar;
