import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Cloud from './components/UI/Cloud';
import React from 'react'
import { useState } from 'react';
import { render } from '@testing-library/react';
import { auth } from './components/firebase/init'
import { createUserWithEmailAndPassword } from 'firebase/auth'

/**
 *  TODO'S FOR 01/19/2024
 *  [] sign up user
 *  [] log in user
 *  [] start home page UI
 */

function App() {
  const [existingUser, setExistingUser] = useState(true);

  function signUp(event) {
    event.preventDefault();
    setExistingUser(false);
    

    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Sign Up
    //     const user = userCredential.user
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message
    //   })  

    render();
  }

  function login(event) {
    event.preventDefault()
    setExistingUser(true);
    render()

    const userEmail = document.getElementById('userEmail').value
    const userPassword = document.getElementById('userPassword').value
    
  }

  return (
    <Router>
      <Welcome existingUser={existingUser} signUp={signUp} login={login}/>
      {/* <Cloud /> */}
    </Router>
  );
}

export default App;
