
import './App.css';
import app from './firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app)
function App() {
  const provider = new GoogleAuthProvider();
  const provider2 = new GithubAuthProvider()
  const provider3 = new FacebookAuthProvider();
  // ==================================================

  const [user, setUser] = useState({})
  // -----------------------------------
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // ---------------------------------
  const handleFBSignIn = () => {
    signInWithPopup(auth, provider3)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // ===========================
  const handleGithubSignin = () => {
    signInWithPopup(auth, provider2)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  // ===================================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>sign out</button> : <div>
          <button onClick={handleGoogleSignIn}>google sign in</button>
          <br /> <br />
          <button onClick={handleFBSignIn}>facebook sign in</button>
          <br /> <br />
          <button onClick={handleGithubSignin}>gitHub sign in</button>
        </div>


      }
      <h2>name : {user.displayName}</h2>
      <h3>email : {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
