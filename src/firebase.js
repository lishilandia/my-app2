
import  firebase  from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXJoSx9An0P1CZ5VPPOgC1o-HtBssvguI",
  authDomain: "proyecto-prueba-43484.firebaseapp.com",
  projectId: "proyecto-prueba-43484",
  storageBucket: "proyecto-prueba-43484.appspot.com",
  messagingSenderId: "83681339413",
  appId: "1:83681339413:web:ba1ca40efacb95ac96861c",
  measurementId: "G-HHKTN22Y7K"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;

