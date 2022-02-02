import React, { useState } from "react";

import "./styles.css";
import { apiSignIn } from "../../utils/api.js";

export const SignIn = ({ setAccessToken, username, setUsername, isGm, setIsGm }) => {

  const onClick = () => {
    apiSignIn(username, isGm).then((res) => {
      setAccessToken(res.access_token);
      setIsGm(res.is_gm);
      localStorage.setItem("rpgSessionOrganiserSession", JSON.stringify({username: username, ...res}));
    });
  }

  return (
    <div>
      <div className='baner'>
        <div className='banerBlock'>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            P
          </div>
          <div className='banerTextE'>
            G 
          </div>
          <div className='banerTextG'>
          &nbsp;-&nbsp; 
          </div>
          <div className='banerTextF'>
            S
          </div>
          <div className='banerTextI'>
            E
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextC'>
            S
          </div>
          <div className='banerTextE'>
            I
          </div>
          <div className='banerTextRed'>
            O
          </div>
          <div className='banerTextD'>
            N 
          </div>
          <div className='banerTextH'>
          &nbsp;-&nbsp;
          </div>
          <div className='banerTextA'>
            O
          </div>
          <div className='banerTextF'>
            R
          </div>
          <div className='banerTextRed'>
            G
          </div>
          <div className='banerTextG'>
            A
          </div>
          <div className='banerTextC'>
            N
          </div>
          <div className='banerTextI'>
            I
          </div>
          <div className='banerTextB'>
            S
          </div>
          <div className='banerTextA'>
            E
          </div>
          <div className='banerTextH'>
            R
          </div>                  
        </div> 
      </div>
      <div className='banerBlockUnderline'></div>
      <div className="loginbox">
        <div className="logIn">
        <a className="logInText">username</a>
        <div>
          <input className="usernameInput" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <a className="logInText">is gm?</a>
        <div>
          <input type="checkbox" value={isGm} onChange={() => setIsGm(!isGm)}/>
        </div>
        <div className="ButtonDiv">
          <button onClick={onClick} className="LogInButton">
            submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
