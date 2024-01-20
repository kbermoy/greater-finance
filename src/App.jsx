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
        setLoggedIn(true)
      })
      .catch((error) => {
        window.alert('Not Registered or invalid email or password.')
      })
  }

  return (
    <Router>
      <Welcome existingUser={existingUser} signUp={signUp} login={login}/>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
