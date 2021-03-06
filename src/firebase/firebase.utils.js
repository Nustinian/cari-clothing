import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKe1Kz7IGWp-hX_6px4-RFRUDdA7N55Uk",
  authDomain: "cari-clothing.firebaseapp.com",
  databaseURL: "https://cari-clothing.firebaseio.com",
  projectId: "cari-clothing",
  storageBucket: "cari-clothing.appspot.com",
  messagingSenderId: "704995937951",
  appId: "1:704995937951:web:2c6d41e0272c89cef15caa",
  measurementId: "G-SHB51C2Z05",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
