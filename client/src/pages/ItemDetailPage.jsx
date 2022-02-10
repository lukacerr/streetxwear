import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailedItem from '@/components/DetailedItem';

import { TailSpin } from 'react-loader-spinner';

import { GetProductById } from '@/daos/productsDao';

function ItemDetailPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    GetProductById(params.itemId)
      .then((query) => {
        if (query.error) setError(true);
        else setData(query.data);
      })
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  if (isLoading)
    return (
      <section className="flex items-center justify-center">
        <TailSpin color="#f62937" height={200} width={200} />
      </section>
    );

  if (error) return <span>error</span>;
  if (!data) return <span>no se han encontrado datos</span>;

  return (
    <section>
      <DetailedItem>{data}</DetailedItem>
    </section>
  );
}

export default ItemDetailPage;
