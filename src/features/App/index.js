import React, { useState, useEffect } from "react";

import './styles.css';
import '../MainPage/index.js'
import { MainPage } from '../MainPage';
import { SignIn } from "../SignIn";

export const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [isGm, setIsGm] = useState(false);
  const [username, setUsername] = useState("");

  const session = JSON.parse(localStorage.getItem("rpgSessionOrganiserSession"));

  useEffect(() => {
    if (session) {
      setAccessToken(session.access_token);
      setIsGm(session.is_gm);
      setUsername(session.username);
    }
  }, [session]);

  return (
    accessToken ? (
      <MainPage isGm={isGm} username={username} setAccessToken={setAccessToken} />
    ) : (
      <SignIn isGm={isGm} setAccessToken={setAccessToken} setIsGm={setIsGm} setUsername={setUsername} username={username}/>
    )
  )
}
