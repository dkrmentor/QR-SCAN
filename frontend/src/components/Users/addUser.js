import React, { useState } from "react";
import { postRegister } from "../../api";
import "../../assets/Style/addUser.css";

const AddUser = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [roleId, setRoleId] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleRoleIdChange = (event) => {
        setRoleId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await postRegister(username, email, password, roleId).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="add-user">
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label><br></br>
                <input type="text" value={username} id="username" name="username" onChange={handleUserNameChange} /><br></br>
                <label for="email">Email:</label><br></br>
                <input type="text" value={email} id="email" name="email" onChange={handleEmailChange} /><br></br>
                <label for="role">Select role:</label>
                <select value={roleId} id="role" name="role" onChange={handleRoleIdChange}>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" value={password} id="password" name="password" onChange={handlePasswordChange} /><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}


export default AddUser;