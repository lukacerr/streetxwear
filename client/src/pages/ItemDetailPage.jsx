import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailedItem from '@/components/DetailedItem';

function ItemDetailPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/';

    axios
      .get(BASE_URL + 'products/' + params.itemId)
      .then((response) => setData(response.data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  if (isLoading) return <span>loading</span>;
  if (error) return <span>error</span>;
  if (!data) return <span>no se han encontrado datos</span>;

  return (
    <section>
      <DetailedItem>{data}</DetailedItem>
    </section>
  );
}

export default ItemDetailPage;
