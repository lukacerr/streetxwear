// * COMPONENT IMPORTS
import ItemInCart from '@/components/ItemInCart';

// ! COMPONENT CartList
function CartList({ children }) {
  return (
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
        {children?.map((x) => (
          <ItemInCart key={x.id}>{x}</ItemInCart>
        ))}
      </tbody>
    </table>
  );
}

// # COMPONENT EXPORT
export default CartList;
