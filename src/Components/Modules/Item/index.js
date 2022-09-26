import React, { useEffect } from "react";

const Item = ({ user,index }) => {
    useEffect(()=>{
       const items = document.querySelectorAll('.user-item');
       items[index].style.animationDelay = `${index / 10}s`
    },[index])
  return (
    <li className="user-item">
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
