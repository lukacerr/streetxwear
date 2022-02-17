// * REACT IMPORTS
import { Link } from 'react-router-dom';

// ! COMPONENT HomePage
function HomePage() {
  return (
    <section
      // mx-24 my-16
      className="
        h-full 
        2xl:mx-24 2xl:my-16 xl:mx-16 xl:my-12 md:mx-12 md:m-10 m-8
        flex lg:flex-row flex-col 
        6xl:gap-48 4xl:gap-32 3xl:gap-24 xl:gap-16 md:gap-12 gap-8
      "
    >
      <Link title="Ir a productos" className="w-full h-auto flex-full" to="/items">
        <article
          className="
            h-full relative bg-black overflow-hidden
            rounded-md shadow-2xl
            flex justify-center items-center
            group transition-all
          "
        >
          <img
            className="h-full w-full scale-105 absolute object-cover opacity-60 blur-sm group-hover:opacity-30 group-hover:scale-110 duration-100"
            src="https://i.imgur.com/WsvBk2b.jpg"
            alt="Ir a productos"
          />

          <div className="z-10 text-white text-center flex flex-col items-center justify-center gap-4 group-hover:scale-110 duration-100">
            <h2 className="font-montserrat font-bold tracking-wider text-4xl">PRODUCTOS</h2>
            <span className="font-poppins tracking-wider font-light text-lg">
              Ir a ver productos
            </span>
          </div>
        </article>
      </Link>

      <Link title="Ir a categorías" className="w-full h-auto flex-full" to="/categories">
        <article
          className="
            h-full relative bg-black overflow-hidden
            rounded-md shadow-2xl
            flex justify-center items-center
            group transition-all
          "
        >
          <img
            className="h-full w-full scale-105 absolute object-cover opacity-70 blur-sm group-hover:opacity-30 group-hover:scale-110 duration-100"
            src="https://i.imgur.com/TVaM4BR.jpg"
            alt="Ir a categorías"
          />

          <div className="z-10 text-white text-center flex flex-col items-center justify-center gap-4 group-hover:scale-110 duration-100">
            <h2 className="font-montserrat font-bold tracking-wider text-4xl">CATEGORÍAS</h2>
            <span className="font-poppins tracking-wider font-light text-lg">
              Ir a ver cateogrías
            </span>
          </div>
        </article>
      </Link>
    </section>
  );
}

// # COMPONENT EXPORT
export default HomePage;
