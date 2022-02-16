// * FIRESTORE IMPORTS
import db from '@/firestore';
import { collection, doc, getDoc, addDoc, setDoc, Timestamp } from 'firebase/firestore';

// * CONTEXT IMPORTS
import { CartConsumer } from '@/contexts/cartContext';

// * COMMON IMPORTS
import handler from '@/common/requestHandler';

export const GetOrderById = async (orderId) => {
  return await handler(async () => {
    const snapshot = await getDoc(doc(db, 'orders', orderId));
    return { ...snapshot.data(), id: orderId };
  });
};

export const GenerateOrder = async (form, items, total) => {
  return await handler(async () => {
    const docRef = await addDoc(collection(db, 'orders'), {
      buyer: form,
      items,
      date: Timestamp.fromDate(new Date()),
      total,
    });

    items.forEach((e) => {
      setDoc(doc(db, 'products', e.id), { stock: e.stock - e.quantity }, { merge: true });
    });

    CartConsumer.clear();
    return docRef.id;
  });
};
