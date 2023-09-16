import { Button } from 'primereact/button';
import React, { useState } from 'react';

import UsersIcon from '../../../assets/img/users.svg';
import UsdtIcon from '../../../assets/img/usdt.svg';
import EditIcon from '../../../assets/img/edit.svg';
import DeleteIcon from '../../../assets/img/delete.svg';
const JourneyQuestCard = ({ no, quest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const edit = () => {};

  const deleteQuest = () => {};

  return (
    <div className="admin-journey-quest-card">
      <div className="admin-journey-quest-card-header">
        <div className="admin-journey-quest-card-title">
          <div className='admin-journey-quest-card-title-row'>
            <span>{`Quest ${no}: `}</span>
            <span className='admin-journey-quest-card-title-text'>{quest.title}</span>
          </div>
          <Button label="" icon="pi pi-ellipsis-h" iconPos="left" outlined onClick={toggling} />
        </div>
        {isOpen && (
          <div className="dropdown-list-container">
            <ul className="dropdown-list">
              <li onClick={() => edit()} className="list-item">
                <span className="ml-2">
                  <span>
                    <img src={EditIcon} />
                  </span>
                  Edit
                </span>
              </li>
              <li onClick={() => deleteQuest()} className="list-item">
                <span className="ml-2">
                  <span>
                    <img src={DeleteIcon} />
                  </span>
                  Delete
                </span>
              </li>
            </ul>
          </div>
        )}
        <div className="admin-journey-quest-card-subtitle">
          <span>
            <img src={UsersIcon} />
          </span>
          <span>{quest.eligibility.type}</span>
        </div>
      </div>
      <div className="admin-journey-quest-card-tags">
        {quest.rewards.items.map((item, index) => {
          return (
            <React.Fragment key={`${index}`}>
              {item.type === 'USDT' && (
                <span>
                  <img src={UsdtIcon} />
                  <span>{item.type}</span>
                </span>
              )}

              {item.type !== 'USDT' && <span>{item.type}</span>}
            </React.Fragment>
          );
        })}
      </div>
      <div className="admin-journey-quest-card-content">
        {quest.tasks.map((task, index) => (
          <div key={index}>{`${index + 1}. ${task.taskTitle}`}</div>
        ))}
      </div>
      {quest.setupRequired && (
        <div className="admin-journey-quest-card-footer">
          <Button
            label="Set up"
            className="p-button-outlined p-button-secondary admin-quest-back-btn"
          />
        </div>
      )}
    </div>
  );
};

export default JourneyQuestCard;
