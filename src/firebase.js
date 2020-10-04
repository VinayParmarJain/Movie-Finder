import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAQdEpg3qBUyyrjyM0oScX2sIRCEW5ng1o',
  authDomain: 'movies-da1e1.firebaseapp.com',
  databaseURL: 'https://movies-da1e1.firebaseio.com',
  projectId: 'movies-da1e1',
  storageBucket: 'movies-da1e1.appspot.com',
  messagingSenderId: '95539394382',
  appId: '1:95539394382:web:cc66567cdc8cb2d6f8d01f',
  measurementId: 'G-8YJ4SMCG9Y',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
