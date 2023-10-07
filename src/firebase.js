import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWvhxlhAiT0-vCqa9AgWbcdDHIbie5LCQ",
  authDomain: "app-d5937.firebaseapp.com",
  databaseURL: "https://app-d5937-default-rtdb.firebaseio.com",
  projectId: "app-d5937",
  storageBucket: "app-d5937.appspot.com",
  messagingSenderId: "1029588489530",
  appId: "1:1029588489530:web:b1965220db0a8d95beec03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
