import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzLIJX_uGg5ouI0-yxvY2rSXarJupf84o",
  authDomain: "hms-medilanka.firebaseapp.com",
  projectId: "hms-medilanka",
  storageBucket: "hms-medilanka.appspot.com",
  messagingSenderId: "837509189488",
  appId: "1:837509189488:web:5e46c43e79b4c3ddc709b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

