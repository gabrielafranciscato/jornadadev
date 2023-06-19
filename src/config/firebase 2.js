
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyBRUTiOfEUG1GYwALtiJfghCpd9dSrP97M",
  authDomain: "tiktok---jornada-1043d.firebaseapp.com",
  projectId: "tiktok---jornada-1043d",
  storageBucket: "tiktok---jornada-1043d.appspot.com",
  messagingSenderId: "928510688224",
  appId: "1:928510688224:web:3ac0ea38e0df06910a4985"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;