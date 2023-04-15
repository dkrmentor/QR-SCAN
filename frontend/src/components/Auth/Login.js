import React, { useContext, useState } from "react";
import { postLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../assets/Style/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
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
      console.log(user);
      if (user && (user.role_id === '2' || user.role_id === '1')) {

        toast.success("Connexion réussie", { autoClose: 2000, });
        localStorage.setItem('isLoggedIn', true); 
        // save user.role_id in local storage 
        localStorage.setItem('role_id', user.role_id);
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_name', user.name);
        
        handleLogin(true);
        
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);

      } else {
        toast.error("Informations de connexion invalides", { autoClose: 2000, });
        setError("Adresse email ou mot de passe invalide");
      }
    } catch (error) {
      toast.error("Une erreur est survenue", { autoClose: 2000, });
      setError("Une erreur est survenue, veuillez réessayer plus tard");
    }
  };

  return (

    <div className="login-page">
      <form className="login-page__form" >

        <h1 className="login-page__title">Connexion</h1>

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
          Mot de passe:
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
          Connexion
        </button>
        <ToastContainer />
      </form>
      {error && <p className="login-page__error">{error}</p>}
    </div>

  );
};

export default Login;