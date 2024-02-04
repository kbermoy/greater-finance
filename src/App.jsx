import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import Cloud from './components/UI/Cloud';
import React from 'react'
import { useState } from 'react';
import { render } from '@testing-library/react';
import { auth } from './components/firebase/init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import Home from './components/Home';

/**
 *  TODO'S FOR 01/20/2024
 *  [] when logged in reroute to the Home page
 */

function App() {
  const [existingUser, setExistingUser] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false)

  function signUp(event) {
    event.preventDefault();
    setExistingUser(false);
    

    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((user) => {
        // Sign Up
        console.log(user);
        setLoggedIn(true)
      })
      .catch((error) => {
        window.alert('Email already registered. Please log in')
      })  

    render();
  }

  let navigate = useNavigate()

  function login(event) {
    event.preventDefault()
    setExistingUser(true);

    const userEmail = document.getElementById('userEmail').value
    const userPassword = document.getElementById('userPassword').value
    
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((user) => {
        // Signed In
        console.log('logged in')
        console.log(user)
        console.log(user._tokenResponse.registered)
        setLoggedIn(true)

        navigate('/home')
      })
      .catch((error) => {
        window.alert('Not Registered or invalid email or password.')
      })
  }

  return ( 
      <Routes>
        <Route path='/' Component={() => <Welcome existingUser={existingUser} signUp={signUp} login={login} />} />
        <Route path='/home' Component={() => <Home />} />
      </Routes>
  );
}

export default App;
