import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6_MNsBvG_nTCrvqj2-xBjcDRfxW11vg8",
  authDomain: "nwitter-reloaded-c35e7.firebaseapp.com",
  projectId: "nwitter-reloaded-c35e7",
  storageBucket: "nwitter-reloaded-c35e7.appspot.com",
  messagingSenderId: "79503719528",
  appId: "1:79503719528:web:73f565f92b6f3b13064fdd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
