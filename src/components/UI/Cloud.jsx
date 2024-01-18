import React from "react";

const Cloud = ({ cloud }) => {
  return (
    <>
      <div className="welcome__body">
        <div className="cloud__body cloud__body--darkPurple">
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--top"></div>
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--two"></div>
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--three"></div>
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--four"></div>
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--five"></div>
          <div className="cloud__circle cloud__circle--darkPurple cloud__circle--six"></div>
        </div>
        <div className="cloud__body cloud__body--lightPurple">
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--top"></div>
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--two"></div>
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--three"></div>
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--four"></div>
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--five"></div>
          <div className="cloud__circle cloud__circle--lightPurple cloud__circle--six"></div>
        </div>
        <div className="cloud__body">
          <div className="cloud__circle cloud__circle--top"></div>
          <div className="cloud__circle cloud__circle--two"></div>
          <div className="cloud__circle cloud__circle--three"></div>
          <div className="cloud__circle cloud__circle--four"></div>
          <div className="cloud__circle cloud__circle--five"></div>
          <div className="cloud__circle cloud__circle--six"></div>
        </div>
      </div>
    </>
  );
};

export default Cloud;
