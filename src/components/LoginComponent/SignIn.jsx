import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { auth, getUserDocument } from "../../utils/firebase";
import "../../styles/signIn.css";


const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const redirect_comp = <Redirect to="/" />;

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            getUserDocument(user.user.uid).then((user) => {
                setRedirect(true);
                props.login(user.displayName);
            })
        })
        .catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

    if (redirect) {
        return (
            redirect_comp
        )
    }

  return (
    <div className="login-page">
      <h1 className="login-page__heading">TypeIt.io</h1>
      <div className="login-page__content">
        <form className="form">
          <label htmlFor="userEmail" className="form__label">
            Email:
          </label>
          <input
            type="email"
            className="form__input"
            name="userEmail"
            value = {email}
            placeholder="E.g: john1987@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="form__label">
            Password:
          </label>
          <input
            type="password"
            className="form__input"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="form__button" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="form__redirect">
          Don't have an account?{" "}
          <Link to="signup" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;