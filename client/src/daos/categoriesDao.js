// * FIRESTORE IMPORTS
import db from '@/firestore';
import { collection, query, getDocs } from 'firebase/firestore';

// * COMMON IMPORTS
import handler from '@/common/requestHandler';

// # FUNCTIONS
export const GetCategories = async () => {
  return await handler(async () => {
    const snapshot = await getDocs(query(collection(db, 'categories')));
    const categories = [];
    snapshot.forEach((doc) => {
      categories.push({ ...doc.data(), id: doc.id });
    });

    return categories.sort((a, b) => a.name.localeCompare(b.name));
  });
};

// # FUNCTIONS
export const GetCategoriesWithSubcats = async () => {
  return await handler(async () => {
    const snapshot = await getDocs(query(collection(db, 'categories')));
    const results = [];

    snapshot.forEach((doc) => {
      const cat = doc.data();

      if (cat.subcategories?.length) {
        cat.subcategories.forEach((subcat, i) => {
          results.push({ ...cat, mainCategory: cat.name, ...subcat, id: `${doc.id}/${i}` });
        });
      }

      results.push({ ...cat, id: doc.id });
    });

    return results.sort((a, b) => a.name.localeCompare(b.name));
  });
};
