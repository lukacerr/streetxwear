// * REACT IMPORTS
import { useParams } from 'react-router-dom';

// * COMPONENT IMPORTS
import DetailedItem from '@/components/DetailedItem';

// * DAO IMPORTS
import { GetProductById } from '@/daos/productsDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT ItemDetailPage
function ItemDetailPage() {
  const params = useParams();
  const status = effectHandler(async () => {
    return await GetProductById(params.itemId);
  }, [params]);

  return loadingHandler(
    status,
    <section>
      <DetailedItem>{status.data}</DetailedItem>
    </section>
  );
}

// # COMPONENT EXPORT
export default ItemDetailPage;
