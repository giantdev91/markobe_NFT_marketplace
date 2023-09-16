import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';

const NavDropDown = ({ items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selected, setSelected] = useState(0);
  const select = (item) => {
    onChange(item);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-container">
      <div className="flex align-items-center dropdown-header" onClick={toggling}>
        <img src={isOpen ? Active_Icon : Inactive_Icon} className="mr-1 drop-down-img" />
        {value}
      </div>
      {isOpen && (
        <div className="dropdown-listcontainer">
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li key={index} onClick={() => select(item)} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
