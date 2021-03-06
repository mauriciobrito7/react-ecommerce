import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBKXbwuFLHcfAR1oOxu2ZLjU8HQYCHyepk",
    authDomain: "react-ecommerce-4cf5e.firebaseapp.com",
    databaseURL: "https://react-ecommerce-4cf5e.firebaseio.com",
    projectId: "react-ecommerce-4cf5e",
    storageBucket: "react-ecommerce-4cf5e.appspot.com",
    messagingSenderId: "225750526370",
    appId: "1:225750526370:web:3f0eb0a3bb4f07f112eafb",
    measurementId: "G-GFSWF6BDPP",
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;