import React, { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
    setUsername('')
    setPassword('')
  };
  return (
    <>
      <section className="login-container">
        <div className="login-wrapper">
          <header className="login-header">
            <h2>Login</h2>
          </header>
          <form className="login-form">
            <div className="label-wrapper">
            <div className="username-wrapper">
              <label>Username</label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="username-input"
              />
            </div>
            <div className="password-wrapper">
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="password-input"
                value={password}
              />
            </div>
            </div>

            <div className="buttons-wrapper">
              <button onClick={handleSubmit} className="button-input">Go Back</button>
              <button onClick={handleSubmit} className="button-input">Log in</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
