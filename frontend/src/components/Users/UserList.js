import React, { useState, useEffect } from "react";
import { getUsers, getSingleUsers } from "../../api";
import UserReputation from "./UserReputation";
import "../../assets/Style/listing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      if (localStorage.getItem("role_id") === "1") {
        const data = await getUsers();
        setUsers(data);
      } else {
        const data = await getSingleUsers();
        setUsers(data);
      }
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

  const handleSortOrderChange = () => {

    setSortOrder((sortOrder) => {
      if (sortOrder === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  const sortedUsers = users != null ? users.sort((a, b) => {
    if (sortOrder != null && sortOrder === "asc") {
      return a.first_name.localeCompare(b.first_name);
    } else {
      return b.first_name.localeCompare(a.first_name);
    }
  }) : null;

  return (
    <div className="user-list">
      {!selectedUser && (
        <div className="user-list-grid">
          <div className="user-list-row user-list-header">
            <div
              className="user-list-cell fname"
              onClick={handleSortOrderChange}
            >
              Prénom{"  "}
              <span className="arrow-icons">
                <FontAwesomeIcon
                  className={`arrow-icon ${sortOrder != null && sortOrder === "asc" ? "visible" : "hide"
                    } ${sortOrder === "asc" ? "unclickable" : ""}`}
                  icon={faArrowUp}
                  style={{ opacity: sortOrder != null && sortOrder === "asc" ? "1" : "0.5" }}
                  onClick={sortOrder != null && sortOrder === "asc" ? null : handleSortOrderChange}
                />
                <FontAwesomeIcon
                  className={`arrow-icon ${sortOrder != null && sortOrder === "asc" ? "hide" : "visible"
                    } ${sortOrder != null && sortOrder === "desc" ? "unclickable" : ""}`}
                  icon={faArrowDown}
                  style={{ opacity: sortOrder != null && sortOrder === "desc" ? "1" : "0.5" }}
                  onClick={sortOrder != null && sortOrder === "desc" ? null : handleSortOrderChange}
                />
              </span>

            </div>
            <div className="user-list-cell position">Position</div>
            <div className="user-list-cell site">Site</div>
            <div className="user-list-cell card">Carte</div>
          </div>
          {sortedUsers != null ? sortedUsers.map((user) => (
            <div
              key={user.id}
              className="user-list-row user-list-body"
              onClick={() => handleUserClick(user)}
            >
              <div className="user-list-cell fname">{user.first_name}</div>
              <div className="user-list-cell position">
                {user.user_position}
              </div>
              <div className="user-list-cell site">{user.site}</div>
              <div className="user-list-cell card">
                {user.identity_card === "yes" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
              </div>
            </div>
          )) : null}
        </div>
      )}
      {selectedUser && <UserReputation user={selectedUser} />}
      
    </div>
  );
};

export default UserList;