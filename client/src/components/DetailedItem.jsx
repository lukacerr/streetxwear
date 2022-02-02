import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { CartConsumer } from '@/contexts/CartContext';

function DetailedItem({ children }) {
  const itemInCart = CartConsumer.getInCart(children);
  const [itemCount, setItemCount] = useState(itemInCart?.quantity ?? 0);

  return (
    <article>
      <Link to={-1}>
        <BiArrowBack className="text-6xl text-red"></BiArrowBack>
      </Link>

      <img className="h-64" src={children.image} alt="" />
      <span>{children.categoryName}</span>
      <h1>{children.name}</h1>
      <p>{children.description}</p>
      <span>
        Precio: ${children.price} | Disponibles: {children.stock}
      </span>

      <h2>Agregar/modificar al carrito:</h2>
      <div className="flex items-center">
        <AiOutlineMinus
          className="cursor-pointer"
          onClick={() => {
            if (itemCount) {
              setItemCount((x) => x - 1);
              CartConsumer.removeItem(children.id, itemCount == 0);
            }
          }}
        ></AiOutlineMinus>
        <span>{itemCount}</span>
        <AiOutlinePlus
          className="cursor-pointer"
          onClick={() => {
            if (itemCount < children.stock) {
              setItemCount((x) => x + 1);
              CartConsumer.addItem(children.id);
            }
          }}
        ></AiOutlinePlus>
      </div>
      <span>Precio: ${children.price * itemCount}</span>
    </article>
  );
}

export default DetailedItem;
