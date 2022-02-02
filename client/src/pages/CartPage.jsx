import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CartContext from '@/contexts/CartContext';

function CategoryListPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const cart = useContext(CartContext);

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/';
    // TODO: data & error
    setData(cart);
    setIsLoading(false);
    return () => {};
  }, []);

  if (isLoading) return <span>loading</span>;
  if (error) return <span>error</span>;
  if (!data.length) return <span>no se han encontrado datos</span>;

  return (
    <section>
      {data.map((x) => (
        <span key={x.id}>
          ID: {x.id}, cantidad: {x.quantity}
        </span>
      ))}
    </section>
  );
}

export default CategoryListPage;
