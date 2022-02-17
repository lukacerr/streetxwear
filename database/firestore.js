import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import dotenv from 'dotenv';
dotenv.config();

const projectId = process.env.PROJECT_ID;
const senderId = process.env.SENDER_ID;
initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: `${projectId}.firebaseapp.com`,
  projectId: projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: senderId,
  appId: `1:${senderId}:web:${process.env.APP_ID}`,
  measurementId: process.env.MEASUREMENT_ID,
});

export default getFirestore();
