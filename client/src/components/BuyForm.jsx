// * REACT IMPORTS
import { useState } from 'react';

// ! COMPONENT BuyForm
function BuyForm({ children }) {
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <label className="flex flex-col px-8 py-1 w-1/2">
          Mail:
          <input type="text" required />
        </label>
      </article>

      <article className="w-full my-4">
        <span className="font-poppins font-medium italic">
          TOTAL: ${children.map((x) => x.price * x.quantity).reduce((a, b) => a + b, 0)}
        </span>
      </article>

      <input
        className="
          bg-white text-red rounded-md cursor-pointer
          text-xl font-montserrat font-bold uppercase
          w-full p-4
        "
        type="submit"
        value="Comprar"
      />
    </form>
  );
}

// # COMPONENT EXPORT
export default BuyForm;
