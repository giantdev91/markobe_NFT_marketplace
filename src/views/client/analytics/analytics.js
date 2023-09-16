import React from 'react';
import Sum from '../../../components/client/analytics/sum';
import AnalyticsChart from '../../../components/client/analytics/analytics-chart';
import Doughnut from '../../../components/client/analytics/doughnut-chart';
import AnalyticsTable from '../../../components/client/analytics/analytics-table';
import DateSwitcher from '../../../components/Switchers/DateSwitcher';

const Analytics = () => {
  const discord = [68, 69, 70, 71, 70, 72, 73, 74, 75, 74, 73, 76, 75, 75];
  const twitter = [38, 39, 40, 41, 40, 43, 44, 44, 45, 43, 47, 46, 44, 43];
  const marko = [28, 29, 30, 31, 30, 32, 33, 34, 35, 36, 37, 36, 35, 35];
  const diagrams = [
    { title: 'Quest name', bottom: 25, start: 20, width: 200 },
    { title: 'Scheduled quest', bottom: 45, start: 65, width: 400 },
    { title: 'Quest name', bottom: 25, start: 40, width: 200 },
    { title: 'Scheduled quest', bottom: 5, start: 10, width: 300 },
    { title: 'Quest name', bottom: 5, start: 60, width: 200 },
    { title: 'Quest name', bottom: 65, start: 30, width: 200 },
    { title: 'Quest name', bottom: 85, start: 40, width: 200 },
  ];
  return (
    <div>
      <div className="flex flex-row justify-content-between gap-3">
        <Sum
          className="flex-grow-1 "
          title={'Total quests passed'}
          count={'1.8k'}
          percentage={7.4}
        />
        <Sum className="flex-grow-1 " title={'Quests organized'} count={'1.8k'} percentage={7.4} />
        <Sum
          className="flex-grow-1 "
          title={'Total quests passed'}
          count={'1.8k'}
          percentage={7.4}
        />
      </div>
      <AnalyticsChart Discord={discord} Twitter={twitter} Marko={marko} Diagrams={diagrams} />
      <div className="doughnut">
        <div className="flex flex-wrap align-items-center justify-content-between toolbar">
          <div className="main-title">Amount of users who interacts with the product</div>
          <DateSwitcher />
        </div>
        <div className="flex flex-wrap flex-row align-items-center justify-content-between gap-4">
          <div className="flex-grow-1">
            <Doughnut title="Twitter" percentage={75} left_num={'400k'} right_num={'1,5m'} />
          </div>
          <div className="flex-grow-1">
            <Doughnut title="Discord" percentage={60} left_num={'400k'} right_num={'1m'} />
          </div>
          <div className="flex-grow-1">
            <Doughnut title="Telegram" percentage={75} left_num={'400k'} right_num={'1m'} />
          </div>
        </div>
      </div>
      <AnalyticsTable />
    </div>
  );
};

export default Analytics;
