// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "hubspot-webapp-8b5f7.firebaseapp.com",
    databaseURL: "https://hubspot-webapp-8b5f7-default-rtdb.firebaseio.com",
    projectId: "hubspot-webapp-8b5f7",
    storageBucket: "hubspot-webapp-8b5f7.appspot.com",
    messagingSenderId: "966181045014",
    appId: "1:966181045014:web:2602213c76118eae034637"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  console.log(app);
  console.log(auth);

  export function handleSignIn() {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    console.log(signInWithPopup);
  }


  console.log(handleSignIn);