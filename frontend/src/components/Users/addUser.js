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
        autoComplete='new-password'
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
  const [roleId, setRoleId] = useState(0);

  useEffect(() => {
    setRoleId(localStorage.getItem("role_id"));
  }, []);

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
          var newUserRole = "";
          setIsLoading(true);
          if (roleId === "1") {
            newUserRole = "2";
          } else {
            newUserRole = "3";
          }

          await postRegister(username, email, password, newUserRole)
            .then(async (response) => {
              console.log(username, email, password, newUserRole)

              console.log(response);
              var controller_id = localStorage.getItem("user_id");
              console.log(newUserRole);
              await postWorker(response.id, controller_id)
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
                        
        {/* <select
          value={roleId}
          id="role"
          name="role"
          onChange={(e) => {
            setRoleId(e.target.value);
            console.log(e.target.value);
          }}
        >
          {role_id === "2" ? (
            <option value="3">travailleur</option>
          ) : (
            <>
              <option value="2">Contrôleur</option>
              <option value="3">travailleur</option>
            </>
          )}
        </select> */}

        <div>
          {roleId === "2" ? (
            <span onClick={() => setRoleId("3")}>travailleur</span>
          ) : (
            <>
              <span onClick={() => setRoleId("2")}>Contrôleur</span>
            </>
          )}
        </div>


                        
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
