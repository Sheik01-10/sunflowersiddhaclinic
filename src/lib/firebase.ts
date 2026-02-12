import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBsg5RGTNHxvnuoeFeTTbxRpBJGVTCHFUs",
  authDomain: "sunflower-siddha-clinic.firebaseapp.com",
  projectId: "sunflower-siddha-clinic",
  storageBucket: "sunflower-siddha-clinic.appspot.com",
  messagingSenderId: "726454944479",
  appId: "1:726454944479:web:433f2211d1ea70544d5f6a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);