// * REACT IMPORTS
import { useParams } from 'react-router-dom';

// * COMPONENT IMPORTS
import Item from '@/components/Item';

// * DAO IMPORTS
import { GetProducts } from '@/daos/productsDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT ItemListPage
function ItemListPage(props) {
  const params = useParams();
  const status = effectHandler(async () => {
    return await GetProducts(params.categoryId, params.subcategoryId);
  }, [params]);

  return loadingHandler(
    status,
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
      {status.data?.map((x) => (
        <Item key={x.id}>{x}</Item>
      ))}
    </section>
  );
}

// # COMPONENT EXPORT
export default ItemListPage;
