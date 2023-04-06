import React, { useState } from "react";
import { postRegister } from "../../api";
import "../../assets/Style/addUser.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "../common/loading_spinner";



const InputValidation = ({ value, name, label, type, required, minLength, maxLength, pattern, onChange }) => {
    const [errorMessage, setErrorMessage] = useState("");


    const handleInputChange = (event) => {
        onChange(event);
        validateInput(event.target.value);
    };
    const validateInput = (value) => {
        if (required && !value) {
            setErrorMessage(`${label} is required.`);
        } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
            setErrorMessage(`Invalid email address.`);
        } else if (minLength && value.length < minLength) {
            setErrorMessage(`${label} must be at least ${minLength} characters.`);
        } else if (maxLength && value.length > maxLength) {
            setErrorMessage(`${label} must be no more than ${maxLength} characters.`);
        } else if (pattern && !value.match(pattern)) {
            setErrorMessage(`${label} is invalid.`);
        } else {
            setErrorMessage("");

        }
    };


    return (
        <>
            <label htmlFor={name}>{label}:</label><br />
            <input type={type} value={value} id={name} name={name} onChange={handleInputChange} /><br />
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </>
    );
};

const AddUser = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [roleId, setRoleId] = useState("1");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username === "" || username.length < 4) {

            toast.error("Username Required", { autoClose: 2000, });
            return;
        } else {
            if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
                toast.error("Email Required", { autoClose: 2000, });
                return;
            } else {
                if (password === "") {
                    toast.error("Password Required", { autoClose: 2000, });
                    return;
                } else {

                    setIsLoading(true);

                    await postRegister(username, email, password, roleId).then((response) => {
                        toast.success("User Added", { autoClose: 2000, });
                        console.log(response);
                        setIsLoading(false);
                    }).catch((error) => {
                        toast.error("Failed To Create", { autoClose: 2000, });
                        setIsLoading(false);
                        console.log(error);
                    });
                }
            }
        }
    };

    return (
        <div className="add-user">
            <form >
                <InputValidation
                    name="username"
                    label="Username"
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
                <label htmlFor="role">Select role:</label>
                <select value={roleId} id="role" name="role" onChange={(e) => setRoleId(e.target.value)}>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select><br />
                <InputValidation
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"

                />
            </form>
            <button className="button" onClick={handleSubmit} disabled={isLoading}> {isLoading ? <LoadingSpinner /> : "Submit"}</button >

            <ToastContainer />
        </div>
    );
}


export default AddUser;