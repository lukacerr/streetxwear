// * COMPONENT IMPORTS
import CategoryItem from '@/components/CategoryItem';

// * DAO IMPORTS
import { GetCategoriesWithSubcats } from '@/daos/categoriesDao';

// * COMMON IMPORTS
import effectHandler from '@/common/effectHandler';
import loadingHandler from '@/common/loadingHandler';

// ! COMPONENT CategoryListPage
function CategoryListPage() {
  const status = effectHandler(async () => {
    return await GetCategoriesWithSubcats();
  }, []);

  return loadingHandler(
    status,
    <section className="p-12 lg:text-left text-center">
      <h1 className="font-montserrat font-bold uppercase text-black text-2xl">
        Lista de categorías
      </h1>
      <div
        className="
          grid content-start
          xl:px-36 lg:px-24 md:px-16 px-8 
          py-6
          gap-x-12 gap-y-8 
          6xl:grid-cols-12 5xl:grid-cols-10 4xl:grid-cols-8 3xl:grid-cols-6 2xl:grid-cols-5 
          xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        "
      >
        {status.data?.map((x) => (
          <CategoryItem key={x.id}>{x}</CategoryItem>
        ))}
      </div>
    </section>
  );
}

// # COMPONENT EXPORT
export default CategoryListPage;
