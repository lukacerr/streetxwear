import db from './firestore.js';
import JSON_DATA from './db.js';

import { collection, addDoc } from 'firebase/firestore';

async function DropAll() {
  // TODO: Drop all collections
}

async function SyncFromJSON() {
  // await DropAll();
  for (const colName in JSON_DATA) {
    const col = JSON_DATA[colName];
    col.forEach(async (e) => {
      try {
        await addDoc(collection(db, colName), e);
      } catch (err) {
        console.log(err);
      }
    });
  }
}

// await DropAll();
await SyncFromJSON();
