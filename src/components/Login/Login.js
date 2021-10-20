import { useState, useEffect, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from "../UI/Input/Input";
import useLogin from "../../hooks/login-hook";


const validateEmail = value => value.includes('@');
const validatePassword = value => value.length > 6;


const Login = (props) => {

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    validateInputHandler: validateEmailHandler
  } = useLogin(validateEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordError,
    inputChangeHandler: passwordChangeHandler,
    validateInputHandler: validatePasswordHandler
  } = useLogin(validatePassword);

  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);


  useEffect(() => {
    const identifier = setTimeout(() => {
     setFormIsValid(
         emailIsValid && passwordIsValid
      );
    }, 500);

    //CleanUp Function
    return () => {
      clearTimeout(identifier);
    }

  },[emailIsValid, passwordIsValid]);



  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailValue, passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input
            id="email"
            label="E-Mail"
            type="email"
            isValid={!emailError}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
        />

        <Input
            id="password"
            label="Password"
            type="password"
            isValid={!passwordError}
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
