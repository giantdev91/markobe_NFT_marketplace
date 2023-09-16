import React, { useEffect } from 'react';
import active_icon from '../../../assets/img/active_left.svg';
import inactive_icon from '../../../assets/img/inactive_right.svg';

const RewardTypeElement = ({ title, onToggle, checked, first }) => {
  return (
    <div
      className={`flex flex-row align-items-center justify-content-between reward-type-element ${
        checked && !first ? 'active' : ''
      }`}
      onClick={onToggle}>
      <div className="flex flex-row align-items-center title-container">
        <input
          type="checkbox"
          className="quest-checkbox"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          checked={checked}
          onChange={() => {
            console.log(title);
          }}
        />
        <p className="title">{title}</p>
      </div>

      {!first && <>{checked ? <img src={active_icon} /> : <img src={inactive_icon} />}</>}
    </div>
  );
};
export default RewardTypeElement;
