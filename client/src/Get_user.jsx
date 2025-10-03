import React, { useEffect, useState } from 'react';

function Get_user() {
    var [all_users, set_all_users] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/get_all_user_data")
            .then(response => response.json())
            .then(data => set_all_users(data));
    }, []);

    return (
        <>
            <h2>All Submitted Users</h2>
            <ul>
                {all_users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.user_name} | 
                        <strong> Age:</strong> {user.user_age} | 
                        <strong> Car:</strong> {user.user_car} | 
                        <strong> Favorite Color:</strong> {user.user_color}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Get_user;
