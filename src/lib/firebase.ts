import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjnskfkh1iNMVeB7JfSsQTgsw0ax5cySc",
  authDomain: "sunflower-siddha-clinic-304ba.firebaseapp.com",
  projectId: "sunflower-siddha-clinic-304ba",
  storageBucket: "sunflower-siddha-clinic-304ba.firebasestorage.app",
  messagingSenderId: "840323077949",
  appId: "1:840323077949:web:38649a37bb9a02c8801754"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);