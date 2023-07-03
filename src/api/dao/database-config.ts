import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

 const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


module.exports = { app }

