import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserReputation from "./UserReputation";
import "../../assets/Style/userlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser((selectedUser) => {
      if (selectedUser === user) {
        return null;
      } else {
        return user;
      }
    });
  };

  return (
    <div className="user-list">
      {!selectedUser && (
        <div className="user-list-grid">
          <div className="user-list-row user-list-header">
            <div className="user-list-cell fname">Firstname</div>
            <div className="user-list-cell position">Position</div>
            <div className="user-list-cell site">Site</div>
            <div className="user-list-cell card">Card</div>
          </div>
          {users.map((user) => (
            <div
              key={user.id}
              className="user-list-row user-list-body"
              onClick={() => handleUserClick(user)}
            >
              <div className="user-list-cell fname">{user.first_name}</div>
              <div className="user-list-cell position">{user.user_position}</div>
              <div className="user-list-cell site">{user.site}</div>
              <div className="user-list-cell card">
                {user.identity_card === "yes" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedUser && <UserReputation user={selectedUser} />}
    </div>
  );
};

export default UserList;



