import React, { useContext, useState } from "react";
import { postLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../assets/Style/login.css"

const Login = () => {
  const { handleLogin  } = useContext(AuthContext);
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

    try {
      const user = await postLogin(email, password);

      if (user && user[0].role_id === 1) {
        handleLogin();
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (

    <div className="login-page">
    <form className="login-page__form" onSubmit={handleSubmit}>
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
      <button className="login-page__button" type="submit">
        Login
      </button>
    </form>
    {error && <p className="login-page__error">{error}</p>}
  </div>
  
  );
};


export default Login;
