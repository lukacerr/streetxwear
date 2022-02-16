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
    return noResultsRet ?? <span>no se han encontrado datos</span>;

  return mainRet ?? noResultsRet ?? errorRet ?? <span>error</span>;
};
