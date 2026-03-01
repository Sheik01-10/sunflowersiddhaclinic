import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCl7IpsB3hh75LFwN-xCl9s0gQ3v0bLO3Y",
  authDomain: "sunflowersiddhaclinic-998b7.firebaseapp.com",
  projectId: "sunflowersiddhaclinic-998b7",
  storageBucket: "sunflowersiddhaclinic-998b7.firebasestorage.app",
  messagingSenderId: "198026952923",
  appId: "1:198026952923:web:2b5e079e81f2b0f634ccfe"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);