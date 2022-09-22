import React from "react";

const Item = ({ user }) => {
  return (
    <li className="user-item">
      <div className="user-cover">
      </div>
      <div className="user-avatar">
        <img src={user.avatar} alt={user.avatar} />
      </div>
      <div className="user-info">
        <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
        <span className="user-email">{user.email}</span>
      </div>
    </li>
  );
};

export default Item;
