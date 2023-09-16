import React from 'react';
import { Link } from 'react-router-dom';

import JourneyBreadCrumb from '../../../components/client/journeys/journeybreadcrumb';
import JourneyQuestCard from '../../../components/client/journeys/journeyquestcard';
import InfoIcon from '../../../assets/img/info.svg';

const JourneysPreview = () => {
  const breadcrumbItems = [{ label: 'Journey templates' }, { label: 'Preview Journey' }];

  const journey = {
    title: 'Basic',
    quests: [
      {
        index: 1,
        title: 'Acquisition',
        subtitle: 'All users',
        tags: ['USDT', 'Karma', 'NFT'],
        flows: [
          'Build Wireframe',
          'User Interface Design',
          'UX Research',
          'Testimonials',
          'Follow twitter',
        ],
        editable: false,
        setupRequired: false,
      },
      {
        index: 2,
        title: 'Activation',
        subtitle: 'NFT holders',
        tags: ['Karma', 'NFT'],
        flows: [
          'Build Wireframe',
          'User Interface Design',
          'UX Research',
          'Testimonials',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
          'Follow twitter',
        ],
        editable: false,
        setupRequired: false,
      },
      {
        index: 3,
        title: 'Retention',
        subtitle: 'All users',
        tags: ['USDT', 'Karma', 'NFT'],
        flows: ['Build Wireframe', 'User Interface Design', 'UX Research'],
        editable: false,
        setupRequired: false,
      },
      {
        index: 4,
        title: 'Retention',
        subtitle: 'All users',
        tags: ['USDT', 'Karma', 'NFT'],
        flows: [
          'Build Wireframe',
          'User Interface Design',
          'UX Research',
          'Testimonials',
          'Follow twitter',
        ],
        editable: false,
        setupRequired: false,
      },
      {
        index: 5,
        title: 'Retention',
        subtitle: 'All users',
        tags: ['USDT', 'Karma', 'NFT'],
        flows: [
          'Build Wireframe',
          'User Interface Design',
          'UX Research',
          'Testimonials',
          'Follow twitter',
        ],
        editable: false,
        setupRequired: false,
      },
      {
        index: 6,
        title: 'Retention',
        subtitle: 'All users',
        tags: ['USDT', 'Karma', 'NFT'],
        flows: [
          'Build Wireframe',
          'User Interface Design',
          'UX Research',
          'Testimonials',
          'Follow twitter',
        ],
        editable: false,
        setupRequired: false,
      },
    ],
  };

  return (
    <>
      <div>
        <div className="admin-journeys-preview-header">
          <div className="admin-journeys-header-breadcrumb">
            <JourneyBreadCrumb model={breadcrumbItems} />
          </div>
          <div className="admin-journeys-header-title">
            <h3>{`${journey.title} journey`}</h3>
          </div>
        </div>
        <div className="admin-journeys-preview-subtitle">
          <span>
            <img src={InfoIcon} />
          </span>
          <p>
            Journey templates are fully editable and adjustable for your personal community needs
            and goals. When you start setting up your journey you will be able to edit/add/delete
            any task or quest within.
          </p>
        </div>
        <div className="admin-journeys-quest-list">
          {journey.quests.map((quest) => (
            <JourneyQuestCard key={quest.index} quest={quest} />
          ))}
        </div>

        <div className="admin-journeys-preview-footer">
          <Link to="/client/journeys/preview" className="preview-button">
            <span>Preview</span>
          </Link>
          <Link to="/client/journeys/setup" className="setup-button">
            <span>Set up</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JourneysPreview;
