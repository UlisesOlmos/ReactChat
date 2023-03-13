import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBkHA6XJ6tJWKHxfpu-NG3E4XVuMzFQSRE",
    authDomain: "friendlychat-daafe.firebaseapp.com",
    projectId: "friendlychat-daafe",
    storageBucket: "friendlychat-daafe.appspot.com",
    messagingSenderId: "220137805342",
    appId: "1:220137805342:web:f62d72bb46a7496bf6000f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
