import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
// all these are used to create a google signin

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


import {getFirestore, doc , getDoc , setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBDO6vF9EnwHbT72cBnEAFRRM3fcPI4-zg",

  authDomain: "crown-clothing-db-1.firebaseapp.com",

  projectId: "crown-clothing-db-1",

  storageBucket: "crown-clothing-db-1.appspot.com",

  messagingSenderId: "913818488783",

  appId: "1:913818488783:web:9967aee7f20b5963a78cba"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider(); // create an instance of class GoogleAuthProvider

googleProvider.setCustomParameters({
    prompt:"select_account"
})

// whenever somebody interacts with the provider , we must make them to select an account
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

export const db = getFirestore();

export const getUserDocFromAuth = async(userAuth,additionalInformation) =>{
    const userDocRef = doc(db,'users',userAuth.uid);

    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
    console.log(userAuth)

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        }
        catch(error){console.log("error while setting the data in the firestore ",error.message)}
    }
    return userDocRef;
}

export const createUserAuthWithEmailAndPassword = async (email,password) =>{
    if(!email || !password)
        return;

    return await createUserWithEmailAndPassword(auth,email,password);
}