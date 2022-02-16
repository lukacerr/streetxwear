// * REACT IMPORTS
import { useState } from 'react';

// * ASSETS IMPORTS
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';

// * CONTEXT IMPORTS
import { CartConsumer } from '@/contexts/cartContext';

// ! COMPONENT ItemInCart
function ItemInCart({ children }) {
  const [itemCount, setItemCount] = useState(children.quantity ?? 0);

  return (
    <tr>
      <td className="flex text-left">
        <img className="h-24" src={children.image} alt="imagen" />
        <span>{children.name}</span>
      </td>
      <td>${children.price} c/u</td>
      <td>{children.stock}</td>
      <td>{itemCount}</td>
      <td>${itemCount * children.price}</td>
      <td>
        <div className="text-xl flex items-center justify-center gap-4">
          <AiOutlinePlus
            onClick={() => {
              if (itemCount < children.stock) {
                CartConsumer.addItem(children.id);
                setItemCount((x) => x + 1);
              }
            }}
            className="cursor-pointer"
            title="+1 producto"
          ></AiOutlinePlus>
          <AiOutlineMinus
            onClick={() => {
              if (itemCount > 1) {
                CartConsumer.removeItem(children.id);
                setItemCount((x) => x - 1);
              }
            }}
            className="cursor-pointer"
            title="-1 producto"
          ></AiOutlineMinus>
          <AiOutlineDelete
            onClick={() => {
              CartConsumer.removeItem(children.id, true);
              setItemCount(0);
            }}
            className="cursor-pointer"
            title="Borrar producto"
          ></AiOutlineDelete>
        </div>
      </td>
    </tr>
  );
}

// # COMPONENT EXPORT
export default ItemInCart;
