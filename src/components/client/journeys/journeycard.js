import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SoonIcon from '../../../assets/img/soon.svg';
import UsedTimesIcon from '../../../assets/img/usedtimes.svg';

const JourneyCard = ({ journey, onPreview, onSetup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const share = () => {};

  const edit = () => {};

  const gotoPreview = () => {
    window.location.href = '/client/journeys/preview';
  };

  return (
    <div className="admin-journey-card">
      {journey.status === 0 && (
        <span className="soon-icon">
          <img src={SoonIcon} />
        </span>
      )}
      <div className={`admin-journey-card-header ${journey.status === 0 ? 'blur' : ''}`}>
        <div className="admin-journey-card-title">
          <span className="admin-journey-card-title-text">{journey.title}</span>
          <Button label="" icon="pi pi-ellipsis-v" iconPos="left" outlined onClick={toggling} />
        </div>
        <div className="admin-journey-card-subtitle">
          <span>
            <img src={UsedTimesIcon} />
          </span>
          <span>{`${journey.usedTimes} times used`}</span>
        </div>
        {isOpen && (
          <div className="dropdown-list-container">
            <ul className="dropdown-list">
              <li onClick={() => share()} className="list-item">
                <span className="ml-2">Share</span>
              </li>
              <li onClick={() => edit()} className="list-item">
                <span className="ml-2">Edit</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={`admin-journey-card-tags ${journey.status === 0 ? 'blur' : ''}`}>
        {['DEFI', 'Infrastructure', 'By SOLUS'].map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className={`admin-journey-card-content ${journey.status === 0 ? 'blur' : ''}`}>
        <p>{journey.description}</p>
      </div>
      <div className={`admin-journey-card-footer ${journey.status === 0 ? 'blur' : ''}`}>
        <Link to="/client/journeys/preview">
          <span>Preview</span>
        </Link>
        {journey.status !== 2 && (
          <Link to={`/client/journeys/setup?journeyId=${journey._id}`} className="setup-button">
            <span>Set up</span>
          </Link>
        )}
        {journey.status === 2 && <Button label="Stop" className="stop-button" />}
      </div>
    </div>
  );
};

export default JourneyCard;
