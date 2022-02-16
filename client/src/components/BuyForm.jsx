// * REACT IMPORTS
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * ASSETS IMPORTS
import { BallTriangle } from 'react-loader-spinner';
import { AiOutlineShopping } from 'react-icons/ai';

// * DAO IMPORTS
import { GenerateOrder } from '@/daos/ordersDao';

// ! COMPONENT BuyForm
function BuyForm({ children }) {
  const navigate = useNavigate();
  const totalPrice = children.map((x) => x.price * x.quantity).reduce((a, b) => a + b, 0);
  const [error, setError] = useState(false);
  const [onPayment, setOnPayment] = useState(false);
  const [form, setForm] = useState({
    name: '',
    mail: '',
    phone: '',
    direction: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setOnPayment(true);
    setError(false);
    GenerateOrder(form, children, totalPrice).then((x) => {
      if (x.error) {
        setOnPayment(false);
        setError(true);
      } else navigate(`/checkout/${x.data}`);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col items-center
        bg-red rounded-lg
        text-white font-noto
        mx-48 my-6
        p-4
    "
    >
      <article className="flex flex-wrap w-full">
        <label className="flex flex-col tracking-wide px-4 py-1 w-1/2">
          <span className="py-1">Nombre:</span>
          <input
            value={form.name}
            onChange={(e) => {
              setForm((p) => ({ ...p, name: e.target.value }));
            }}
            placeholder="John Doe"
            className="p-1 rounded-sm font-poppins text-black"
            type="text"
            required
          />
        </label>

        <label className="flex flex-col tracking-wide px-4 py-1 w-1/2">
          <span className="py-1">Mail:</span>
          <input
            value={form.mail}
            onChange={(e) => {
              setForm((p) => ({ ...p, mail: e.target.value }));
            }}
            placeholder="ejemplo@dominio.com"
            className="p-1 rounded-sm font-poppins text-black"
            type="text"
            required
          />
        </label>

        <label className="flex flex-col tracking-wide px-4 py-1 w-1/2">
          <span className="py-1">Dirección:</span>
          <input
            value={form.direction}
            onChange={(e) => {
              setForm((p) => ({ ...p, direction: e.target.value }));
            }}
            placeholder="Calle 123"
            className="p-1 rounded-sm font-poppins text-black"
            type="text"
            required
          />
        </label>

        <label className="flex flex-col tracking-wide px-4 py-1 w-1/2">
          <span className="py-1">Teléfono:</span>
          <input
            value={form.phone}
            onChange={(e) => {
              if (!/[a-zA-Z]/g.test(e.target.value))
                setForm((p) => ({ ...p, phone: e.target.value }));
            }}
            placeholder="+54 9 11"
            className="p-1 rounded-sm font-poppins text-black"
            type="tel"
            required
          />
        </label>
      </article>

      <article className="flex items-center w-full my-4">
        <AiOutlineShopping className="text-xl"></AiOutlineShopping>
        <span className="mx-2 font-poppins font-medium italic">TOTAL: ${totalPrice}</span>
      </article>

      {error && (
        <span className="text-white py-2 text-xl font-noto">
          Ocurrió un error con su compra. Vuelva a intentarlo más tarde.
        </span>
      )}

      {onPayment ? (
        <BallTriangle color="#fff" height={80} width={80} />
      ) : (
        <input
          className="
          bg-white text-red rounded-md cursor-pointer
          text-xl font-montserrat font-bold uppercase
          w-full p-4
        "
          type="submit"
          value="Comprar"
        />
      )}
    </form>
  );
}

// # COMPONENT EXPORT
export default BuyForm;
