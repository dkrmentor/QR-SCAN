import React, { useEffect, useState } from "react";
import { postRegister, postWorker } from "../../api";
import "../../assets/Style/addUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../common/loading_spinner";

const InputValidation = ({
  value,
  name,
  label,
  type,
  required,
  minLength,
  maxLength,
  pattern,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    onChange(event);
    validateInput(event.target.value);
  };
  const validateInput = (value) => {
    if (required && !value) {
      setErrorMessage(`${label} est requis.`);
    } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrorMessage(`Adresse email invalide.`);
    } else if (minLength && value.length < minLength) {
      setErrorMessage(
        `${label} doit contenir au moins ${minLength} caractères.`
      );
    } else if (maxLength && value.length > maxLength) {
      setErrorMessage(
        `${label} doit contenir au maximum ${maxLength} caractères.`
      );
    } else if (pattern && !value.match(pattern)) {
      setErrorMessage(`${label} est invalide.`);
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <label htmlFor={name}>{label}:</label>             
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={handleInputChange}
      />
                  
      {errorMessage && <span className="error-message">{errorMessage}</span>}
              
    </>
  );
};

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [roleId, setRoleId] = useState(1);
  const [role_id, setRole_Id] = useState(0);

  useEffect(() => {
    setRole_Id(localStorage.getItem("role_id"));
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || username.length < 4) {
      toast.error("Nom d'utilisateur requis", { autoClose: 2000 });
      return;
    } else {
      if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        toast.error("Email requis", { autoClose: 2000 });
        return;
      } else {
        if (password === "") {
          toast.error("Mot de passe requis", { autoClose: 2000 });
          return;
        } else {
          setIsLoading(true);
          await postRegister(username, email, password, roleId)
            .then(async (response) => {
              var controller_id = localStorage.getItem("user_id");

              await postWorker(response.name, response.id, controller_id)
                .then(() => {
                  toast.success("Utilisateur ajouté", { autoClose: 2000 });
                })
                .catch(() => {
                  toast.error("Erreur lors de l'ajout du travailleur", {
                    autoClose: 2000,
                  });
                });
              setIsLoading(false);
            })
            .catch((error) => {
              toast.error("Erreur lors de la création", { autoClose: 2000 });
              setIsLoading(false);
            });
        }
      }
    }
  };

  return (
    <div className="add-user">
                  
      <form>
                        
        <InputValidation
          name="username"
          label="Nom d'utilisateur"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength={3}
          maxLength={20}
        />
                        
        <InputValidation
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         <label htmlFor="role">Sélectionner un rôle:</label>
                        
        <select
          value={roleId}
          id="role"
          name="role"
          onChange={(e) => {
            setRoleId(e.target.value);
          }}
        >
          {role_id === "1" ? (
            <option value="1">travailleur</option>
          ) : (
            <>
              <option value="2">Contrôleur</option>
              <option value="1">travailleur</option>
            </>
          )}
        </select>
                        
        <InputValidation
          name="password"
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
        />
                    
      </form>
                  
      <button className="button" onClick={handleSubmit} disabled={isLoading}>
        {" "}
        {isLoading ? <LoadingSpinner /> : "Soumettre"}
      </button>
                  
      <ToastContainer />
              
    </div>
  );
};

export default AddUser;
