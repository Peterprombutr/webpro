import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, generateUserDocument } from "../../utils/firebase";
import "../../styles/signUp.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const redirect_comp = <Redirect to="/" />;

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName}).then(user => {
          setRedirect(true);
          props.login(user.displayName);
      });
    }
    catch(error){
        console.log(error);
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  if (redirect) {
      return (
          redirect_comp
      )
  }

  return (
    <div className="signup-page">
      <h1 className="login-page__heading">TypeIt.io</h1>
      <div className="login-page__content">
        <form className="form">
          <label htmlFor="displayName" className="form__label">
            Display Name:
          </label>
          <input
            type="text"
            className="form__input"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="form__label">
            Email:
          </label>
          <input
            type="email"
            className="form__input"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="form__label">
            Password:
          </label>
          <input
            type="password"
            className="form__input"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
            className="form__button"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="form__redirect">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;