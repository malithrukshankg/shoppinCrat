import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyCKpGRyJ26DVCbUswYjDmPQof2Ywr7V5Nw",
    authDomain: "crwn-db-b6d9f.firebaseapp.com",
    databaseURL: "https://crwn-db-b6d9f.firebaseio.com",
    projectId: "crwn-db-b6d9f",
    storageBucket: "crwn-db-b6d9f.appspot.com",
    messagingSenderId: "467518485057",
    appId: "1:467518485057:web:3a9426db1f8a11cc684cc0",
    measurementId: "G-H434NPNS4D"
  };


  firebase.initializeApp(config);


  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;

