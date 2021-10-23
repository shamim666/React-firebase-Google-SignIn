import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import firebaseAuthentication from './Firebase/firebase.initialize';



// this comes from  firebase.initialize.js 
firebaseAuthentication();



function App() {
  const [user, setUser] = useState({})
  const auth = getAuth();
// this comes from https://firebase.google.com/docs/auth/web/google-signin?authuser=0 
// Google sign-in option point number 1.
const provider = new GoogleAuthProvider();


  const handleGoogleSignIn = () => {
    // this comes from https://firebase.google.com/docs/auth/web/google-signin?authuser=0 
    // Google sign-in option point number 5. 

    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        }

        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        setUser({})
      }).catch((error) => {
        console.log(error.message)
      });
  }




  return (
    <div className="App">

      {
        !user.name ? <button onClick={handleGoogleSignIn}>Google Sign In</button> :
          <button onClick={handleSignOut}>Sign Out</button>
      }
      <br />

      {
        
        user.email && <div>
          <h2> your name : {user.name}</h2>
          <p>your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div> 
        
        
        // or
        // user.email ? <div>
        //   <h2> your name : {user.name}</h2>
        //   <p>your email: {user.email}</p>
        //   <img src={user.photo} alt="" />
        // </div>: <div></div>
      }
    </div>
  );
}

export default App;
