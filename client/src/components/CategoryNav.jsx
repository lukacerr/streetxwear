// * REACT IMPORTS
import { Link } from 'react-router-dom';

// * ASSETS IMPORTS
import { IoArrowBackOutline, IoListOutline } from 'react-icons/io5';

// ! COMPONENT CategoryNav
function CategoryNav({ children }) {
  const catInList = children.data.find((x) => x.id == children.category);
  const toDisplay = catInList
    ? catInList.subcategories
        .map((x, i) => ({
          id: String(i),
          name: x.name,
          linkto: `${catInList.id}/${i}`,
        }))
        .filter((x) => x.id != children.subcategory)
    : children.data.map((x) => ({ id: x.id, name: x.name, linkto: x.id }));

  return (
    <div className="flex flex-nowrap lg:flex-row flex-col gap-4 items-center justify-evenly mt-4 p-4 xl:w-3/4 lg:5/6 w-11/12 rounded-xl text-lg bg-red text-white shadow-md font-poppins">
      <Link className="hover:scale-110 transition-transform duration-100" to={-1}>
        <IoArrowBackOutline title="Atrás" className="text-4xl"></IoArrowBackOutline>
      </Link>

      {catInList && (
        <Link className="hover:scale-110 transition-transform duration-100" to={`/items`}>
          <IoListOutline title="A la lista" className="text-4xl"></IoListOutline>
        </Link>
      )}

      {toDisplay.map((x) => (
        <Link
          className="hover:scale-110 transition-transform duration-100"
          key={x.id}
          to={`/items/${x.linkto}`}
        >
          <span>{x.name}</span>
        </Link>
      ))}
    </div>
  );
}

// # COMPONENT EXPORT
export default CategoryNav;
