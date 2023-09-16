import React, {useState} from 'react';
import moment from 'moment';
import {RANGE_PERIOD} from '../../types';

const dates = [
  {
    index: 0,
    from: moment().subtract(1, 'months').toISOString(),
    to: moment().toISOString(),
    label: '1 M',
    range: RANGE_PERIOD.ONE_MONTH,
  },
  {
    index: 1,
    from: moment().subtract(3, 'months').toISOString(),
    to: moment().toISOString(),
    label: '3 M',
    range: RANGE_PERIOD.THREE_MONTH,
  },
  {
    index: 2,
    from: moment().subtract(6, 'months').toISOString(),
    to: moment().toISOString(),
    label: '6 M',
    range: RANGE_PERIOD.SIX_MONTH,
  },
  {
    index: 3,
    from: moment().subtract(1, 'year').toISOString(),
    to: moment().toISOString(),
    label: '1 Y',
    range: RANGE_PERIOD.ONE_YEAR,
  },
];

const DateSwitcher = ({setRange}) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const onClick = (date) => {
    setActiveIndex(date.index);
    setRange({from: date.from, to: date.to, range: date.range});
  };

  return (
    <div className={'date-switcher'}>
      <div className='flex flex-row right-btns gap-2'>
        {dates.map((date, index) => (
          <div
            key={index}
            onClick={() => onClick(date)}
            className={`flex align-items-center justify-content-between btn ${activeIndex === index && 'active'}`}>
            {date.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSwitcher;
