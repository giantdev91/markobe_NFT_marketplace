import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import JourneyQuestCard from '../../../components/client/journeys/journeyquestcard';
import InfoIcon from '../../../assets/img/info.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';

const JourneysTemplate = ({ setTab, journey }) => {
  const [quests, setQuests] = useState([]);
  const navigate = useNavigate();

  const routeToTemplate = () => {
    navigate(`/client/journeys/quest/setup?journeyId=${journey._id}`);
  };

  useEffect(() => {
    setQuests(journey.quests);
  }, [journey]);

  return (
    <>
      <div className="admin-journeys-quest-template-header">
        <span>Quest Templates</span>
        <span>
          <img src={InfoIcon} />
        </span>
      </div>
      <div className="admin-journeys-quest-list-wrapper">
        <div className="admin-journeys-quest-list flex-inline setup-templates">
          {quests.map((quest, index) => (
            <JourneyQuestCard key={index} no={index + 1} quest={quest} />
          ))}
          {/* <Link to="/client/journeys/quest/setup" className="p-button p-component">
            Add new quest
          </Link> */}
          <Button label="Add new quest" icon="pi pi-plus" onClick={routeToTemplate}></Button>
        </div>
      </div>
      <div className="admin-align-right quest-entries-btn-group">
        <Button
          label="Back"
          className="p-button-outlined p-button-secondary admin-quest-back-btn"
          onClick={() => setTab(1)}
        />
        <Button
          label="Next"
          className="p-button-primary admin-quest-next-btn"
          onClick={() => setTab(3)}
        />
      </div>
    </>
  );
};

export default JourneysTemplate;
