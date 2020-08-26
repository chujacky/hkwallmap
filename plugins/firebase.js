import firebase from 'firebase/app';
import 'firebase/storage';

export default ({ env, store }, inject) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://hkwallmap.firebaseio.com/',
    projectId: 'hkwallmap',
    storageBucket: 'gs://hkwallmap.appspot.com',
  }

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }

  inject('firebase', firebase)
}