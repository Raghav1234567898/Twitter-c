import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAacSQRRo5-miFDEeAEIZWcz4-WWmZVY-I",
    authDomain: "twitter-clone-1b4cf.firebaseapp.com",
    projectId: "twitter-clone-1b4cf",
    storageBucket: "twitter-clone-1b4cf.appspot.com",
    messagingSenderId: "805099418565",
    appId: "1:805099418565:web:33fb88200bdb620ca851ac",
    measurementId: "G-7CSW5M3QW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
