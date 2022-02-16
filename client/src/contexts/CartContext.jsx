// * REACT IMPORTS
import { useState, useEffect, createContext } from 'react';

// * COMMON
const CART_STORAGE = 'sxw-cart';
let CURRENT_CART = JSON.parse(localStorage.getItem(CART_STORAGE)) || [];

// * CONTEXT
const CartContext = createContext(CURRENT_CART);
CartContext.displayName = 'CartContext';
export default CartContext;

// * PROVIDER
export const CartProvider = ({ children }) => {
  const [value, setValue] = useState(CURRENT_CART);

  useEffect(() => {
    const refetchCart = () => setValue([...CURRENT_CART]);
    window.addEventListener('onCartChanged', refetchCart);
    return () => window.removeEventListener('onCartChanged', refetchCart);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// * CONSUMER
const ChangeAndDispatch = (newCart) => {
  localStorage.setItem(CART_STORAGE, JSON.stringify((CURRENT_CART = [...newCart])));
  window.dispatchEvent(new Event('onCartChanged'));
};

export const CartConsumer = {
  addItem: (itemId, quantity = 1) => {
    if (!itemId) return;
    const item = CURRENT_CART.find((x) => x.id == itemId);
    if (item) item.quantity += quantity;
    else CURRENT_CART.push({ id: itemId, quantity });
    ChangeAndDispatch([...CURRENT_CART]);
  },
  removeItem: (itemId, clear = false) => {
    if (!itemId) return;
    const item = CURRENT_CART.find((x) => x.id == itemId);
    if (!clear && item.quantity > 1) item.quantity--;
    else CURRENT_CART.splice(CURRENT_CART.indexOf(item), 1);
    ChangeAndDispatch([...CURRENT_CART]);
  },
  clear: () => CURRENT_CART.length && ChangeAndDispatch([]),
  getInCart: ({ id, stock }, context) => {
    if (context) CURRENT_CART = [...context];
    const item = CURRENT_CART.find((x) => x.id == id);
    if (item && item.quantity > stock) {
      if (stock) item.quantity = stock;
      else CURRENT_CART.splice(CURRENT_CART.indexOf(item), 1);
      ChangeAndDispatch([...CURRENT_CART]);
    }
    return item;
  },
};
