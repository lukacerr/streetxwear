import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// * CONTEXT
const CartContext = createContext([]);
CartContext.displayName = 'CartContext';
export default CartContext;

// * COMMON
const CART_STORAGE = 'sxw-cart';
const ON_CART_CHANGED_EVENT = new Event('onCartChanged');
let CURRENT_CART = JSON.parse(localStorage.getItem(CART_STORAGE)) || [];

// * PROVIDER
export const CartProvider = ({ children }) => {
  const [value, setValue] = useState(CURRENT_CART);

  useEffect(() => {
    const refetchCart = () => setValue(CURRENT_CART);
    window.addEventListener(ON_CART_CHANGED_EVENT.type, refetchCart);
    return () => window.removeEventListener(ON_CART_CHANGED_EVENT.type, refetchCart);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// * CONSUMER
const ChangeAndDispatch = (newCart) => {
  localStorage.setItem(CART_STORAGE, JSON.stringify((CURRENT_CART = newCart)));
  window.dispatchEvent(ON_CART_CHANGED_EVENT);
};

export const CartConsumer = {
  addItem: (itemId, quantity = 1) => {
    const item = CURRENT_CART.find((x) => x.id == itemId);
    if (item) item.quantity += quantity;
    else CURRENT_CART.push({ id: itemId, quantity });
    ChangeAndDispatch([...CURRENT_CART]);
  },
  removeItem: (itemId, clear = false) => {
    const item = CURRENT_CART.find((x) => x.id == itemId);
    if (!clear && item.quantity > 1) item.quantity--;
    else CURRENT_CART.splice(CURRENT_CART.indexOf(item), 1);
    ChangeAndDispatch([...CURRENT_CART]);
  },
  clear: () => CURRENT_CART.length && ChangeAndDispatch([]),
  getInCart: ({ id, stock }) => {
    const item = CURRENT_CART.find((x) => x.id == id);
    if (item && item.quantity > stock) {
      if (stock) item.quantity = stock;
      else CURRENT_CART.splice(CURRENT_CART.indexOf(item), 1);
      ChangeAndDispatch([...CURRENT_CART]);
    }
    return item;
  },
};
