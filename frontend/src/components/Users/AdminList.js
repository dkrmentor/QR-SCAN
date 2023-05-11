import React, { useState, useEffect } from "react";
import { getAdmins, getSingleWorker } from "../../api";
import "../../assets/Style/listing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const AdminList = () => {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchUsers = async () => {
    if (localStorage.getItem("role_id") === "1") {
      const data = await getAdmins();
      setUsers(data);
    } else {
      const data = await getSingleWorker();
      setUsers(data);
    }
  };

  useEffect(() => {
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

  const sortedUsers = users != null ? users.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }) : [];

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
                className={`arrow-icon ${sortOrder === "asc" ? "visible" : "hide"
                  } ${sortOrder === "asc" ? "unclickable" : ""}`}
                icon={faArrowUp}
                style={{ opacity: sortOrder === "asc" ? "1" : "0.5" }}
                onClick={sortOrder === "asc" ? null : handleSortOrderChange}
              />
              <FontAwesomeIcon
                className={`arrow-icon ${sortOrder === "asc" ? "hide" : "visible"
                  } ${sortOrder === "desc" ? "unclickable" : ""}`}
                icon={faArrowDown}
                style={{ opacity: sortOrder === "desc" ? "1" : "0.5" }}
                onClick={sortOrder === "desc" ? null : handleSortOrderChange}
              />
            </span>
          </div>
          <div className="user-list-cell email">Email</div>
        </div>
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className="user-list-row user-list-body"
          >
            <div className="user-list-cell fname">{user.name}</div>
            <div className="user-list-cell position">
              {user.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminList;
