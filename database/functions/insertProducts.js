import db from '../firestore.js';
import { collection, addDoc } from 'firebase/firestore';

import errorHandler from '../common/errorHandler.js';
import categories from '../utils/categories.js';

export default async function (arr) {
  if (!Array.isArray(arr) || !arr.length) return;

  errorHandler(async () => {
    for (let prod of arr) {
      const category = categories.find((cat) => cat.name == prod.categoryName);
      if (!category) continue;

      await addDoc(collection(db, 'products'), {
        ...prod,
        description:
          prod.description ??
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: category.id,
        subcategory: prod.subcategories.map((sub) => category.subcategories[sub]),
      });
    }
  });
}
