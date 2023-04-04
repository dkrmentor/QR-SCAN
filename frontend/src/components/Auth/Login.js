import React, { useContext, useState } from "react";
import { postLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../assets/Style/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(isLoggedIn)
    console.log("works")

    try {
      const user = await postLogin(email, password);

      if (user && user[0].role_id === 1) {

        toast.success("Login Successful", { autoClose: 2000, });
        handleLogin(true);
        
        setTimeout(() => {
          console.log(isLoggedIn)
          navigate('/', { replace: true });
        }, 2000);

      } else {
        toast.error("Invalid Credentials", { autoClose: 2000, });
        setError("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong", { autoClose: 2000, });
      setError("Something went wrong. Please try again later.");
    }
  };

  return (

    <div className="login-page">
      <form className="login-page__form" >

        <h1 className="login-page__title">Login</h1>

        <label className="login-page__label">
          Email:
          <input
            className="login-page__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label className="login-page__label">
          Password:
          <input
            className="login-page__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <button onClick={handleSubmit} className="login-page__button" type="submit">
          Login
        </button>
        <ToastContainer />
      </form>
      {error && <p className="login-page__error">{error}</p>}
    </div>

  );
};


export default Login;
