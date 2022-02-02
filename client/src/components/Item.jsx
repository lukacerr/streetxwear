import { Link } from 'react-router-dom';

function Item({ children }) {
  return (
    <Link to={'/item/' + children.id}>
      <article
        className="bg-white text-center shadow-md rounded-md overflow-hidden
          hover:scale-105 transform-gpu transition-transform duration-125"
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
