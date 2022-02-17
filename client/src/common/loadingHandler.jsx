// * REACT IMPORTS
import { Link } from 'react-router-dom';

// * ASSETS IMPORTS
import { IoArrowBackOutline } from 'react-icons/io5';
import { TailSpin } from 'react-loader-spinner';

export default ({ data, isLoading, error }, mainRet, noResultsRet, errorRet, loadingRet) => {
  if (isLoading)
    return (
      loadingRet ?? (
        <section className="flex items-center justify-center">
          <TailSpin color="#f62937" height={200} width={200} />
        </section>
      )
    );

  if (error) return errorRet ?? <span>error</span>;

  if (Array.isArray(data) ? !data?.length : !data)
    return (
      noResultsRet ?? (
        <section>
          <Link to={-1}>
            <IoArrowBackOutline title="Atrás" className="text-red text-4xl"></IoArrowBackOutline>
          </Link>
          <span>No se han encontrado datos</span>
        </section>
      )
    );

  return mainRet ?? noResultsRet ?? errorRet ?? <span>error</span>;
};
