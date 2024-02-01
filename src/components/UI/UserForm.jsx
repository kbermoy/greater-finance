import React from "react";
import { useHistory } from 'react-router-dom' // used to reroute to the page you want to

const UserForm = ({ existingUser, signUp, login}) => {

  return (
    <div className="welcome__userInput--container">
      {existingUser
        ? <h1 className="welcome__userInput--title">Login</h1>
        : <h1 className="welcome__userInput--title">Sign Up</h1>
      }
      <form action="">
        {existingUser
          ? <></>
          : <>
            <div className="form__item">
                <label htmlFor="" className="form__label--title">Name</label>
                <input type="text" className="welcome__form--input" />
              </div>
              <div className="form__item">
                <label htmlFor="" className="form__label--title">Last Name</label>
                <input type="text" className="welcome__form--input" />
              </div>
            </>
        }
        <div className="form__item">
          <label htmlFor="" className="form__label--title">
            Username
          </label>
          <input type="text" className="welcome__form--input" id="userEmail" />
        </div>
        <div className="form__item">
          <label htmlFor="" className="form__label--title">
            Password
          </label>
          <input type="text" className="welcome__form--input" id="userPassword" />
        </div>
        {existingUser 
          ? <button className="btn" onClick={(event) => login(event)}>Login</button>
          : <button className="btn" type="submit" onClick={(event) => signUp(event)}>Sign Up</button>
        }
      </form>
    </div>
  );
};

export default UserForm
