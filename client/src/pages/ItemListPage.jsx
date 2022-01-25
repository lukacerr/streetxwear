import { useState, useEffect } from 'react';
import axios from 'axios';

import Item from '@/components/Item';

function ItemListPage(params) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/';

    axios
      .get(BASE_URL + 'products')
      .then((response) => setData(response.data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    // return
  }, []);

  if (isLoading) return <span>loading</span>;
  if (error) return <span>error</span>;

  return (
    <section className="flex">
      {data.map((x) => (
        <Item key={x.id}>{x}</Item>
      ))}
    </section>
  );
}

export default ItemListPage;
