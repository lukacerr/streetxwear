import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <section className="flex flex-col">
      <Link to="/items">Ir a la lista de productos</Link>
      <Link to="/categories">Ir a la lista de categorias</Link>
    </section>
  );
}

export default HomePage;
