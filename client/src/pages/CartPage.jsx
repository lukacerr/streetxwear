import { useState, useEffect, useContext } from 'react';

import { TailSpin } from 'react-loader-spinner';

import CartContext from '@/contexts/cartContext';

import ItemInCart from '@/components/ItemInCart';

import { GetProductsInCart } from '@/daos/productsDao';

function CartPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const cart = useContext(CartContext);

  useEffect(() => {
    GetProductsInCart(cart)
      .then((query) => {
        if (query.error) setError(true);
        else setData(query.data);
      })
      .finally(() => setIsLoading(false));

    return () => {};
  }, [cart]);

  if (isLoading)
    return (
      <section className="flex items-center justify-center">
        <TailSpin color="#f62937" height={200} width={200} />
      </section>
    );

  if (error) return <span>error</span>;
  if (!data?.length) {
    return (
      <section className="flex w-full h-full items-center justify-center">
        El carrito está vacío
      </section>
    );
  }

  return (
    <section>
      <article>
        <h1>Carrito</h1>
      </article>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock disponible</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <ItemInCart key={x.id}>{x}</ItemInCart>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CartPage;
