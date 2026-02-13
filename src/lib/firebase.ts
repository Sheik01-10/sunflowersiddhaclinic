import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMrkb2ZtI9i1hHej8Gc1nY7cO35caQj9M",
  authDomain: "sunflower-siddha-clinic-f7575.firebaseapp.com",
  projectId: "sunflower-siddha-clinic-f7575",
  storageBucket: "sunflower-siddha-clinic-f7575.firebasestorage.app",
  messagingSenderId: "360172553953",
  appId: "1:360172553953:web:f9870f9b98964d0153d9a0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);