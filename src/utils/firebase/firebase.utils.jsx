import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD_MXg0RFcHdbFWrL4xydUSomxkqARS_eM",
    authDomain: "munin-clothing-db.firebaseapp.com",
    projectId: "munin-clothing-db",
    storageBucket: "munin-clothing-db.appspot.com",
    messagingSenderId: "856785191441",
    appId: "1:856785191441:web:ea2c9dd2ab5195d3c627b0"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot); 
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  
  return userDocRef;
}