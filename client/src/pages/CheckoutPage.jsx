// * REACT IMPORTS
import { useParams } from 'react-router-dom';

// * DAO IMPORTS
import { GetOrderById } from '@/daos/ordersDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT CheckoutPage
function CheckoutPage(props) {
  const params = useParams();
  const status = effectHandler(async () => {
    return await GetOrderById(params.orderId);
  }, [params]);

  const data = status.data;
  console.log(data);
  return loadingHandler(
    status,
    <section className="p-8">
      <article>
        <h1>ID de compra: {data?.id}</h1>
        {/* <span>Fecha: {data?.date}</span> */}
        <span>Total: {data?.total}</span>
      </article>
      <hr />
      <article className="flex flex-col">
        <h3>Información del comprador:</h3>
        <span>Nombre: {data?.buyer.name}</span>
        <span>Mail: {data?.buyer.mail}</span>
        <span>Teléfono: {data?.buyer.phone}</span>
        <span>Dirección: {data?.buyer.direction}</span>
      </article>
      <hr />
      <article className="flex flex-col">
        <h3>Productos comprados</h3>
        {data?.items.map((x) => (
          <div key={x.id}>
            <span>
              x{x.quantity} {x.name}
            </span>
            <img className="h-24" src={x.image} alt={x.name} />
            <span>
              Precio (individual): ${x.price} / Precio (x{x.quantity}): ${x.price * x.quantity}
            </span>
          </div>
        ))}
      </article>
    </section>
  );
}

// # COMPONENT EXPORT
export default CheckoutPage;
