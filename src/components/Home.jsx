import React from "react";
import Nav from "./UI/Nav";
import FeatureNav from "./UI/FeatureNav";

const Home = () => {
  return (
    <>
      <Nav />
      <FeatureNav />
      <div className="featurePages__container">
        <div className="featurePages__row">
          {/* top */}
          <div className="home__top">
            {/* topLeft */}
            <div className="currentBalance__container grayContainer">
              <div className="feature__title">Current Balance</div>
              <div className="currentBalance__balances">
                <div className="userBank__item">
                  <div className="userBank__title">Bank 1</div>
                  <div className="userBank__balance">$0.00</div>
                </div>
                <div className="userBank__item">
                  <div className="userBank__title">Bank 2</div>
                  <div className="userBank__balance">$0.00</div>
                </div>
              </div>
            </div>
            {/* topRight */}
            <div className="creditDebt__container grayContainer">
              <div className="feature__title">Credit Debt</div>
              <div className="currentBalance__balances">
                <div className="userBank__item">
                  <div className="userBank__title">Bank 1</div>
                  <div className="userBank__balance">$0.00</div>
                </div>
                <div className="userBank__item">
                  <div className="userBank__title">Bank 2</div>
                  <div className="userBank__balance">$0.00</div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="home__right--bottom">
            <div className="subscriptions__container grayContainer">
              <div className="feature__title">Subscriptions</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
