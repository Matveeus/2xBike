/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYo3shhyYqaYlRuRzgUo2GLgEO3lkxTdA',
  authDomain: 'x2bike-55790.firebaseapp.com',
  projectId: 'x2bike-55790',
  storageBucket: 'x2bike-55790.appspot.com',
  messagingSenderId: '562645839399',
  appId: '1:562645839399:web:bc810a9682f2e7a101a802',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
