import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFzPd-aSgdy_QRutoI7C0WB0EAsEBNNbo",
    authDomain: "web2024-e4de7.firebaseapp.com",
    projectId: "web2024-e4de7",
    storageBucket: "web2024-e4de7.appspot.com",
    messagingSenderId: "369883592203",
    appId: "1:369883592203:web:ec047381101d391de8b90e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
