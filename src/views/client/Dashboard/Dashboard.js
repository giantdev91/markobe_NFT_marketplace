import React, {useState} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {QUEST_STATUS, RANGE_PERIOD} from '../../../types';
import DateSwitcher from '../../../components/Switchers/DateSwitcher';
import RangeSwitcher from '../../../components/Switchers/RangeSwitcher';
import Circle_Icon from '../../../assets/img/analytics_diagram.svg';
import QuestsList from './components/QuestsList';

const diagrams = [
  {title: 'Quest name', bottom: 25, start: 20, width: 200},
  {title: 'Scheduled quest', bottom: 45, start: 65, width: 250},
  {title: 'Quest name', bottom: 25, start: 40, width: 200},
  {title: 'Scheduled quest', bottom: 5, start: 10, width: 300},
  {title: 'Quest name', bottom: 5, start: 60, width: 200},
  {title: 'Quest name', bottom: 65, start: 30, width: 200},
  {title: 'Quest name', bottom: 85, start: 40, width: 400},
];

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    from: moment(),
    to: moment(),
    range: RANGE_PERIOD.THREE_MONTH,
  });

  return (
    <div className={'dashboard'}>
      <div className='flex flex-row justify-content-between gap-3 align-items-center'>
        <h2>Timeline</h2>
        <DateSwitcher setRange={(range) => setDateRange(range)} />
      </div>
      <div className={'bg-no_active mt-2 rounded-lg'}>
        <div className={'client-analytics-chart'}>
          <div className={'main-part p-4'} style={{borderRadius: '8px'}}>
            <RangeSwitcher range={dateRange.range} />
            <div className='flex flex-row grid-part pt-2'>
              <div className='col-5'></div>
              <div className='col-3'></div>
              <div className='col-4-right'></div>
              <div className='quest-diagram-container'>
                {diagrams.map((item, index) => (
                  <div key={index}
                    style={{
                      bottom: `${item.bottom}%`,
                      left: `${item.start}%`,
                      width: `${item.width}px`,
                    }}
                    className='flex flex-row align-items-center quest-diagram'>
                    <img alt={'circle'} src={Circle_Icon} className='mr-1' />{item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-content-between gap-3 align-items-center'>
        <h2>Quests</h2>
        <Link to='/client/dashboard/archive' className='group'>
          <button className={'button'}>Archive</button>
        </Link>
      </div>
      <div
        className='flex flex-row flex-wrap space-x-4 align-items-stretch justify-content-center md:justify-content-between mt-6'>
        <QuestsList status={QUEST_STATUS.DRAFTS} height={280} />
        <QuestsList status={QUEST_STATUS.ACTIVE} height={280} />
        <QuestsList status={QUEST_STATUS.COMPLETED} height={280} />
      </div>
    </div>
  );
};

export default Dashboard;
