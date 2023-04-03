import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import UserList from "../Users/UserList";
import UserReputation from "../Users/UserReputation";
import UserForm from "../Users/UserForm";
import Navbar from "../common/navbar";

const Dashboard = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/reputation" element={<UserReputation />} />
        <Route path="/users/form" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
