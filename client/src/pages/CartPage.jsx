// * REACT IMPORTS
import { useContext, useEffect, useState } from 'react';

// * CONTEXT IMPORTS
import CartContext from '@/contexts/cartContext';

// * COMPONENT IMPORTS
import CartList from '@/components/CartList';
import BuyForm from '@/components/BuyForm';

// * DAO IMPORTS
import { GetProductsInCart } from '@/daos/productsDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT CartPage
const CartPage = (props) => {
  const cart = useContext(CartContext);
  const status = effectHandler(async () => {
    return await GetProductsInCart(cart);
  }, [cart]);

  return loadingHandler(
    status,
    <section>
      <h1>Carrito</h1>
      <hr />
      <CartList>{status.data}</CartList>
      <hr />
      <BuyForm>{status.data}</BuyForm>
    </section>,
    <section className="flex w-full h-full items-center justify-center">
      El carrito está vacío
    </section>
  );
};

// # COMPONENT EXPORT
export default CartPage;
