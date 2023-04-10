import React, { useState, useEffect } from "react";
import { getNotifications } from "../../api";

const UserNotification = () => {
    const [notification, setNotifications] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getNotifications();
            setNotifications(data);
        };
        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${user.user_lat},${user.user_long}`;
        window.open(url, '_blank');
    };

    return (
        <div className="user-list">
            <div className="user-list-grid">
                <div className="user-list-row user-list-header">
                    <div className="user-list-cell fname">Prénom</div>
                    <div className="user-list-cell position">E-mail</div>
                    <div className="user-list-cell site">Location</div>
                </div>
                {notification.map((user) => (
                    <div
                        key={notification.user_id}
                        className="user-list-row user-list-body"
                        onClick={() => handleUserClick(user)}>
                        <div className="user-list-cell fname">{user.name}</div>
                        <div className="user-list-cell position">{user.email}</div>
                        <div className="user-list-cell site">{user.current_location}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserNotification;