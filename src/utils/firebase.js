import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCy31TY1sUe_jS7xmrE_VHDpET3bKMSp9g",
  authDomain: "attendance-management-sy-873d0.firebaseapp.com",
  databaseURL: "https://attendance-management-sy-873d0-default-rtdb.firebaseio.com",
  projectId: "attendance-management-sy-873d0",
  storageBucket: "attendance-management-sy-873d0.appspot.com",
  messagingSenderId: "482255906236",
  appId: "1:482255906236:web:e8b917f21b24a31efff7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);