import React from 'react';
import { Link } from 'react-router-dom';
import QuestsList from './components/QuestsList';
import { QUEST_STATUS } from '../../../types';
import Doughnut from '../../../components/client/analytics/doughnut-chart';
import UserDashboard from './components/UserDashboard';

const Archive = () => {
  return (
    <div>
      <div className={'align-items-center'}>
        <Link style={{ textDecoration: 'none' }} to={'/client/dashboard'}>
          <span style={{ fontSize: 12, color: 'rgba(20, 20, 20, 0.7)' }}>Dashboard</span>
        </Link>
        <img
          className={'mx-1'}
          width={10}
          height={10}
          alt={'arrow-right'}
          src={'/assets/images/arrows/arrow-right.svg'}
        />
        <span style={{ fontSize: 12, color: '#141414' }}>Archive</span>
      </div>
      <h2>Archive</h2>
      <div className={'flex flex-row align-items-stretch'}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <QuestsList status={QUEST_STATUS.EXPIRED} height={'100vh'} />
        </div>
        <div style={{ width: '50%' }} className={'flex-1 flex flex-column gap-2 doughnut'}>
          <span style={{ fontSize: 18, fontWeight: 500 }}>Quest Name</span>
          <div className="flex flex-wrap gap-3 flex-row align-items-center justify-content-between">
            <div className="flex-grow-1">
              <Doughnut title="Twitter" percentage={75} left_num={'400k'} right_num={'1,5m'} />
            </div>
            <div className="flex-grow-1">
              <Doughnut title="Discord" percentage={60} left_num={'400k'} right_num={'1m'} />
            </div>
            <div className="flex-grow-1">
              <Doughnut title="Telegram" percentage={35} left_num={'400k'} right_num={'1m'} />
            </div>
          </div>
          <div className="flex flex-row justify-content-between gap-3 align-items-center">
            <h2>Users Dashboard</h2>
            <div>
              <Link to="/client/dashboard/archive" className="group">
                <button style={{ marginRight: 10 }} className={'button'}>
                  Download PDF
                </button>
              </Link>
              <Link to="/client/dashboard/archive" className="group">
                <button className={'button'}>Archive</button>
              </Link>
            </div>
          </div>
          <UserDashboard />
        </div>
      </div>
    </div>
  );
};

export default Archive;
