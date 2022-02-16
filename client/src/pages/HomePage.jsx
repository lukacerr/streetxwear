// * REACT IMPORTS
import { Link } from 'react-router-dom';

// ! COMPONENT HomePage
function HomePage(props) {
  return (
    <section className="flex flex-col">
      <Link to="/items">Ir a la lista de productos</Link>
      <Link to="/categories">Ir a la lista de categorias</Link>
    </section>
  );
}

// # COMPONENT EXPORT
export default HomePage;
