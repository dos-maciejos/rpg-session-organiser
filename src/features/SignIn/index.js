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
      username:
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      is gm?
      <input type="checkbox" value={isGm} onChange={() => setIsGm(!isGm)}/>
      <button onClick={onClick}>
        submit
      </button>
    </div>
  );
}
