import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Item from '@/components/Item';

function ItemListPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/';

    axios
      .get(BASE_URL + 'products')
      .then((response) => {
        setData(
          response.data
            .filter((x) =>
              !params.categoryId
                ? true
                : x.category.includes(Number(params.categoryId)) &&
                  (!params.subcategoryId
                    ? true
                    : x.subcategory.includes(Number(params.subcategoryId)))
            )
            .sort((a, b) => b.stock - a.stock)
        );
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => {};
  }, [params]);

  if (isLoading) return <span>loading</span>;
  if (error) return <span>error</span>;
  if (!data.length) return <span>no se han encontrado datos</span>;

  return (
    <section
      className="
        grid content-start
        xl:px-36 lg:px-24 md:px-16 px-8 
        lg:py-12 py-8 
        gap-x-12 gap-y-8 
        6xl:grid-cols-12 5xl:grid-cols-10 4xl:grid-cols-8 3xl:grid-cols-6 2xl:grid-cols-5 
        xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
      "
    >
      {data.map((x) => (
        <Item key={x.id}>{x}</Item>
      ))}
    </section>
  );
}

export default ItemListPage;
