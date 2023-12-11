import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgUyT_xDO7u-ULH0jfU7KDkqzCs1HC0wo",
  authDomain: "adoptavida-8d2f4.firebaseapp.com",
  projectId: "adoptavida-8d2f4",
  storageBucket: "adoptavida-8d2f4.appspot.com",
  messagingSenderId: "647856815953",
  appId: "1:647856815953:web:47f2ca0bfca4bb7e3c9d70"
};

export const app = initializeApp(firebaseConfig);