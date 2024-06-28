import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB1Ib4D3FgkVz9GYfXXYrWqMZ5SZ0X8enY",
    authDomain: "authentication-50296.firebaseapp.com",
    projectId: "authentication-50296",
    storageBucket: "authentication-50296.appspot.com",
    messagingSenderId: "666120417791",
    appId: "1:666120417791:web:edda119378ed6fae2837ca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);