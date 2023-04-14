import React, { createContext, useState, useEffect  } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import UserList from "./components/Users/UserList";
import UserReputation from "./components/Users/UserReputation";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Auth/Login";
import Layout from "./Layout";
import AddUser from "./components/Users/addUser";
import './assets/Style/app.css'
import UserNotification from "./components/Users/UserNotification";


export const AuthContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);

  const handleLogin = (val) => {
    setIsLoggedIn(val);
  }

  const handleLogout = (val) => {
    setIsLoggedIn(val);
  }

  return (
    <Router>
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />} />
        {isLoggedIn && (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
          {!isLoggedIn ? (
            <Route path="*" element={<Navigate to="/login" replace />} />
          ) : (
            <>
              <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/notifications" element={<UserNotification />} />
              <Route path="/users/reputation" element={<UserReputation />} />
              </Route>

            </>
          )}
      </Routes>
    </AuthContext.Provider>
  </Router>
  );

 
};

export default App;
