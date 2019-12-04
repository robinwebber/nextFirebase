import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const firebaseConfig = {
  apiKey: publicRuntimeConfig.FIREBASE_API_KEY,
  authDomain: publicRuntimeConfig.FIREBASE_AUTHDOMAIN,
  databaseURL: publicRuntimeConfig.FIREBASE_DATABASE_URL,
  projectId: publicRuntimeConfig.FIREBASE_PROJECT_ID,
  storageBucket: publicRuntimeConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: publicRuntimeConfig.FIREBASE_APP_ID,
  measurementId: publicRuntimeConfig.FIREBASE_MEASUREMENT_ID
};

export const myFirebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const baseDb = myFirebase.firestore();
export const db = baseDb;
