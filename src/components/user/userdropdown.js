import React, { useState } from 'react';
import { Button } from 'primereact/button';

const UserDropDown = ({ menus, user, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const select = (value) => {};
  return (
    <div className="user-dropdown">
      <div className="user-dropdown-container">
        <Button
          label={user.wallet}
          outlined
          icon="pi pi-chevron-circle-down"
          iconPos="right"
          onClick={toggling}
        />
      </div>

      {isOpen && (
        <div className="user-dropdown-list-container">
          <div className="user-profile">
            <img src={user.avatar} />
            <span>{user.name}</span>
          </div>
          <ul className="user-dropdown-list">
            {menus.map((menu, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  select();
                }}
                className="list-item"
              >
                <label className="ml-2">{menu.text}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
