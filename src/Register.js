import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      // create user function
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully create user with email and password
        if (auth) {
          // push the login page to hompage after creating account
          history.push("/");
        }
      })
      // pop up the error if there is an error
      .catch((error) => alert(error.message));
    // do some fancy firebase register
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Account registration</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Password confirm</h5>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </form>
        <button onClick={register} className="register__button">
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Register;
