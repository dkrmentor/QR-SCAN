import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/Users/UserList";
import UserReputation from "./components/Users/UserReputation";
import Dashboard from "./components/Dashboard.js";
// import Notfound from "./components/Notfound.js";
import Login from "./components/Auth/Login";
import Layout from "./Layout";
import AddUser from "./components/Users/addUser";
import './assets/Style/app.css'
import UserNotification from "./components/Users/UserNotification";
import ErrorPage from "./components/error/error";

export const AuthContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (

    <Router>
      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {isLoggedIn ? (
              <>
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notifications" element={<UserNotification />} />
                <Route path="/users/reputation" element={<UserReputation />} />
              </>
            ) : (
              <Route path="/error" element={<ErrorPage />} />
            )}
          </Route>
        </Routes>
      </AuthContext.Provider>
    </Router>

  );
};

export default App;