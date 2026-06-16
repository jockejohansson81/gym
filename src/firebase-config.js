import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Firebase configuration - ersätt med din egen konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyReplaceMeWithYourConfig",
  authDomain: "traningsapp-dummy.firebaseapp.com",
  projectId: "traningsapp-dummy",
  storageBucket: "traningsapp-dummy.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase initialized (placeholder config - replace with real config)");
