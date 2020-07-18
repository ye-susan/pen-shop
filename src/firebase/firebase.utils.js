import firebase from 'firebase/app'; 
//dont want any dependencies when we don't need them bc there's a lot
//need firebase keyword bc it gives us access to the libraries below (attached to firebase keyword)
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC7njRgIbkqb8A4JBeqz6nkSoXkuiWnlHU",
    authDomain: "ecomm-proj.firebaseapp.com",
    databaseURL: "https://ecomm-proj.firebaseio.com",
    projectId: "ecomm-proj",
    storageBucket: "ecomm-proj.appspot.com",
    messagingSenderId: "918965081471",
    appId: "1:918965081471:web:edd756408b67c9c568364a"
};

//async bc we're making API request, userAuth library object, additionalData is any new data that we're goihg to pass in (iin the form of an object)
//we'll only perform this function if user is logged in, that we get back a valid object

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


/* setting up Google Authentication Provider */
    //auth gives us to this method GoogleAuthProvider()
const provider = new firebase.auth.GoogleAuthProvider();
    // want to always trigger google popup when we trigger google auth/sign in
provider.setCustomParameters({ prompt: 'select_account' });
    //signInWithPopup, takes in many diff types of popups, but we want to set it with just Googler
    //will configure for Google signin by enabling the Google Sign-in method in the Firebase browser platform
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;