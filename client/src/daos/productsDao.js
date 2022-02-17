// * FIRESTORE IMPORTS
import db from '@/firestore';
import { doc, getDoc, collection, query, where, getDocs, documentId } from 'firebase/firestore';

// * COMMON IMPORTS
import handler from '@/common/requestHandler';

// * CONTEXT IMPORTS
import { CartConsumer } from '@/contexts/CartContext';

// # FUNCTIONS
export const GetProducts = async (categoryId, subcategoryId) => {
  return await handler(async () => {
    const statements = [];
    if (categoryId) {
      statements.push(where('category', '==', categoryId));
      if (subcategoryId)
        statements.push(where('subcategory', 'array-contains', Number(subcategoryId)));
    }

    const snapshot = await getDocs(query(collection(db, 'products'), ...statements));
    const products = [];
    snapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });

    return products.sort((a, b) => b.stock - a.stock);
  });
};

export const GetProductById = async (itemId) => {
  return await handler(async () => {
    const snapshot = await getDoc(doc(db, 'products', itemId));
    return { ...snapshot.data(), id: itemId };
  });
};

export const GetProductsInCart = async (cart) => {
  return await handler(async () => {
    if (!cart || !cart.length) return;

    const snapshot = await getDocs(
      query(
        collection(db, 'products'),
        where(
          documentId(),
          'in',
          cart.map((x) => x.id)
        )
      )
    );

    const products = [];
    snapshot.forEach((doc) => {
      const docData = doc.data();
      const docInCart = CartConsumer.getInCart({ id: doc.id, stock: docData.stock }, cart);
      products.push({ ...docData, ...docInCart });
    });

    return products.sort((a, b) => a.name.localeCompare(b.name));
  });
};
