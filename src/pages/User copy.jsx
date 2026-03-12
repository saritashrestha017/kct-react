import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const userData = [
    { id: 1, name: "Sarita Shrestha" },
    { id: 2, name: "Sumana Tamang" },
    { id: 3, name: "Alice Thapa" }
  ];

  return (
    <div>
      <h1>User List</h1>
      {userData.map((user, index) => (
        <div key={index}>
          <Link to={`/user/${user.id}`}>
            <p>{user.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;