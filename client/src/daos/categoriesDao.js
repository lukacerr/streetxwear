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

    return categories.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  });
};
