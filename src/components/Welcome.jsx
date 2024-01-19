import React, { useState } from "react";
import Cloud from "./UI/Cloud";
import UserForm from "./UI/UserForm";
import { render } from "@testing-library/react";

const Welcome = ({ existingUser, signUp, login }) => {

  return (
    <div className="welcome__body">
      <Cloud />
      <UserForm existingUser={existingUser} signUp={signUp} login={login} />
      <div className="signUp__action--container">
        {existingUser ? (
          <>
            <div className="signUp__action--details">Don't have an account?</div>
            <div className="signUp__action--btn" onClick={signUp}>Sign Up</div>
          </>
        ) : (
          <>
            <div className="signUp__action--details">
              Have an account?
            </div>
            <div className="signUp__action--btn" onClick={login}>
              Log in
            </div>
          </>
        )}
      </div>
      <div className="welcome__description">
        <h1 className="welcome__title">
          Welcome To <br />
          Logo
        </h1>
        <h2 className="welcome__sub-title">
          Logo is a platform to manage your finances in one place
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
