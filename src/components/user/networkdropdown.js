import React, { useState } from 'react';

import NetworkIcon from '../../assets/img/user/network.svg';

const NetworkDropDown = ({ networks, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const select = (value) => {};
  return (
    <div className="network-dropdown">
      <div className="network-dropdown-container">
        <button className="network-button" onClick={() => toggling()}>
          <img src={NetworkIcon} />
        </button>
      </div>

      {isOpen && (
        <div className="network-dropdown-list-container">
          <h3>Select a network</h3>
          <ul className="network-dropdown-list">
            {networks.map((network, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  select();
                }}
                className="list-item"
              >
                <img src={network.icon} />
                <label className="ml-2">{network.text}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NetworkDropDown;
