import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

function Item({ children }) {
  return (
    <Link
      className="relative hover:scale-105 transform-gpu transition-transform duration-125"
      to={'/item/' + children.id}
    >
      {!children.stock && (
        <span
          title="Sin stock"
          className="
            absolute right-0 top-0 z-10
            bg-red text-white text-2xl
            flex items-center justify-center
            w-12 h-12 -translate-y-4 translate-x-4
            rounded-md shadow-lg 
          "
        >
          <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
        </span>
      )}

      <article
        className="bg-white text-center shadow-md rounded-md overflow-hidden"
        title={children.name}
      >
        <div className="aspect-square">
          <img
            className="h-full w-full object-cover"
            src={children.image}
            alt={'Imagen de' + children.name}
          />
        </div>
        <div className="px-4 py-4">
          <span className="font-montserrat text-sm font-semibold italic uppercase">
            {children.categoryName}
          </span>
          <h3 className="font-montserrat">{children.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <h6 className="font-noto">${children.price} ARS</h6>
            <span className="font-poppins text-xs opacity-50">{children.stock} disponibles</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Item;
