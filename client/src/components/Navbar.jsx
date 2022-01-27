import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FiShoppingCart } from 'react-icons/fi';
import logo from '@/assets/logo.svg';

function Navbar(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/';

    axios
      .get(BASE_URL + 'categories')
      .then((response) => {
        setData(response.data.sort((a, b) => b.name - a.name));
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  if (isLoading) return <span>loading</span>;
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

      <div className="flex md:gap-x-12 gap-x-4">
        <ul className="flex items-center md:gap-x-12 gap-x-4">
          <li className="hover:border-b-4 border-red transition-all duration-75">
            <Link to="/about">
              <span className="font-poppins text-xl">Contacto</span>
            </Link>
          </li>

          <li className="hover:border-b-4 border-red transition-all duration-75">
            <Link to="/items">
              <span className="font-poppins text-xl">Productos</span>
            </Link>
          </li>

          {data.map((x) => (
            <li key={x.id} className="hover:border-b-4 border-red transition-all duration-75">
              <Link to={'/categories/' + x.id}>
                <span className="font-poppins text-xl">{x.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/cart"
          className="flex items-center hover:scale-110   
              hover:text-red transform-gpu transition-all duration-100
          "
        >
          <span className="md:text-2xl sm:text-xl text-lg mx-1 text-red">0</span>
          <FiShoppingCart className="md:text-4xl sm:text-3xl text-2xl"></FiShoppingCart>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
