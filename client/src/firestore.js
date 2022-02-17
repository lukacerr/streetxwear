import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const projectId = import.meta.env.VITE_PROJECT_ID;
const senderId = import.meta.env.VITE_SENDER_ID;
initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: `${projectId}.firebaseapp.com`,
  projectId: projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: senderId,
  appId: `1:${senderId}:web:${import.meta.env.VITE_APP_ID}`,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
});

export default getFirestore();
