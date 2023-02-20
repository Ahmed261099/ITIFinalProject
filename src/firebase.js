import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP-V71uLK4GOTOpTrc0K2pv47HMun34_8",
    authDomain: "final-afa59.firebaseapp.com",
    databaseURL: "https://final-afa59-default-rtdb.firebaseio.com",
    projectId: "final-afa59",
    storageBucket: "final-afa59.appspot.com",
    messagingSenderId: "1079384896612",
    appId: "1:1079384896612:web:156bc7818bbe11cf0adb71",
    measurementId: "G-LJSYRE8VRY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, db, provider};