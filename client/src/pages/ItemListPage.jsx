// * REACT IMPORTS
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// * COMPONENT IMPORTS
import Item from '@/components/Item';
import CategoryNav from '@/components/CategoryNav';

// * ASSETS IMPORTS
import { IoArrowBackOutline } from 'react-icons/io5';

// * DAO IMPORTS
import { GetProducts } from '@/daos/productsDao';
import { GetCategories } from '@/daos/categoriesDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT ItemListPage
function ItemListPage() {
  const params = useParams();
  const status = effectHandler(async () => {
    const products = await GetProducts(params.categoryId, params.subcategoryId);
    const categories = await GetCategories();
    return { data: { products: products.data, categories: categories.data }, error: false };
  }, [params]);

  return loadingHandler(
    { data: status.data?.products, error: status.error, isLoading: status.isLoading },
    <main>
      <div className="lg:px-12 px-2 lg:pt-8 pt-4 flex flex-col items-center justify-center">
        <CategoryNav>
          {{
            category: params.categoryId,
            subcategory: params.subcategoryId,
            data: status.data?.categories,
          }}
        </CategoryNav>
      </div>

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
        {status.data?.products.map((x) => (
          <Item key={x.id}>{x}</Item>
        ))}
      </section>
    </main>,
    <main>
      <div className="px-12 pt-12 flex flex-col items-center justify-center">
        <CategoryNav>
          {{
            category: params.categoryId,
            subcategory: params.subcategoryId,
            data: status.data?.categories,
          }}
        </CategoryNav>
      </div>

      <section
        className="
          xl:px-36 lg:px-24 md:px-16 px-8 
          lg:py-12 py-8 
        "
      >
        <span className="font-poppins text-xl opacity-75">
          No se encontraron productos disponibles.
        </span>
      </section>
    </main>
  );
}

// # COMPONENT EXPORT
export default ItemListPage;
