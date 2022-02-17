// * REACT IMPORTS
import { Link } from 'react-router-dom';

// ! COMPONENT CategoryItem
function CategoryItem({ children }) {
  return (
    <Link to={`/items/${children.id}`}>
      <article className="relative text-center aspect-square rounded-md overflow-hidden shadow-xl flex items-center justify-center bg-black hover:scale-105 transition-all duration-100 group">
        <img
          className="absolute w-full h-full object-cover scale-105 opacity-30 blur-sm group-hover:opacity-20 group-hover:scale-110 duration-100"
          src={children.image}
          alt={children.name}
        />
        <div className="z-10 text-white text-center group-hover:scale-125 duration-100">
          <h3 className="font-montserrat font-bold tracking-wider text-lg uppercase">
            {children.name}
          </h3>
          {children.mainCategory && (
            <span className="italic tracking-wider font-poppins">{children.mainCategory}</span>
          )}
        </div>
      </article>
    </Link>
  );
}

// # COMPONENT EXPORT
export default CategoryItem;
