import React, { useState, useEffect } from "react";
import { getAdmins } from "../../api";
import "../../assets/Style/listing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
 const AdminList = () => {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAdmins();
      setUsers(data);
    };
    fetchUsers();
  }, []);



  const handleSortOrderChange = () => {
    
    setSortOrder((sortOrder) => {
      if (sortOrder === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  const sortedUsers = users.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.first_name.localeCompare(b.first_name);
    } else {
      return b.first_name.localeCompare(a.first_name);
    }
  });

  return (
    <div className="user-list">
        <div className="user-list-grid">
          <div className="user-list-row user-list-header">
            <div
              className="user-list-cell fname"
              onClick={handleSortOrderChange}
            >
              Prénom{"  "}
              <span className="arrow-icons">
              <FontAwesomeIcon
                className={`arrow-icon ${
                  sortOrder === "asc" ? "visible" : "hide"
                } ${sortOrder === "asc" ? "unclickable" : ""}`}
                icon={faArrowUp}
                style={{ opacity: sortOrder === "asc" ? "1" : "0.5" }}
                onClick={sortOrder === "asc" ? null : handleSortOrderChange}
              />
              <FontAwesomeIcon
                className={`arrow-icon ${
                  sortOrder === "asc" ? "hide" : "visible"
                } ${sortOrder === "desc" ? "unclickable" : ""}`}
                icon={faArrowDown}
                style={{ opacity: sortOrder === "desc" ? "1" : "0.5" }}
                onClick={sortOrder === "desc" ? null : handleSortOrderChange}
              />
              </span>
             
            </div>
            <div className="user-list-cell position">Position</div>
            <div className="user-list-cell site">Site</div>
            <div className="user-list-cell card">Carte</div>
          </div>
          {sortedUsers.map((user) => (
            <div
              key={user.id}
              className="user-list-row user-list-body"
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
          ))}
        </div>
     
    </div>
  );
};

export default AdminList;