import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {RANGE_PERIOD} from '../../types';
import Left_Icon from '../../assets/img/buttons/month_left.svg';
import Right_Icon from '../../assets/img/buttons/month_right.svg';


const RangeSwitcher = ({range}) => {
  const [periodRange, setPeriodRange] = useState({
    from: '',
    to: '',
    label: [''],
    range,
  });

  const rangePeriodMonths = {
    [RANGE_PERIOD.ONE_MONTH]: 1,
    [RANGE_PERIOD.THREE_MONTH]: 3,
    [RANGE_PERIOD.SIX_MONTH]: 6,
    [RANGE_PERIOD.ONE_YEAR]: 12,
  };

  useEffect(() => {
    adjustRange(0);
  }, [range]);

  const adjustRange = (amount) => {
    const currentRange = {...periodRange};
    if (!currentRange.from) {
      currentRange.from = moment().startOf('month').format('YYYY-MM-DD');
    }
    if (range === RANGE_PERIOD.ONE_YEAR) {
      setPeriodRange({
        from: moment(currentRange.from).add(amount, 'year').startOf('year').format('YYYY-MM-DD'),
        to: moment(currentRange.from).add(amount, 'year').endOf('year').format('YYYY-MM-DD'),
        label: [moment(currentRange.from).add(amount, 'year').format('YYYY')],
        range: RANGE_PERIOD.ONE_YEAR,
      });
    } else {
      const startMonthIndex = moment(currentRange.from).month();
      const newStartMonthIndex = (startMonthIndex + amount * rangePeriodMonths[range]) % 12;
      const from = moment(currentRange.from)
          .month(newStartMonthIndex)
          .startOf('month')
          .format('YYYY-MM-DD');
      const to = moment(currentRange.from)
          .month(newStartMonthIndex + rangePeriodMonths[range] - 1)
          .endOf('month')
          .format('YYYY-MM-DD');
      const months = [];
      for (let i = 0; i < rangePeriodMonths[range]; i++) {
        const month = moment(currentRange.from)
            .month(newStartMonthIndex + i)
            .format('MMMM');
        months.push(month);
      }
      setPeriodRange({from, to, label: months, range});
    }
  };

  return (
    <div className='flex align-items-center justify-content-between'>
      <div
        onClick={() => adjustRange(-1)} className='flex align-items-center justify-content-center month-btn'>
        <img src={Left_Icon} alt={'left-icon'} />
      </div>
      {periodRange.label.map((label, index) => (
        <div key={index}>
          <span className='date-comment text-align-center'>{label}</span>
        </div>
      ))}
      <div onClick={() => adjustRange(1)} className='flex align-items-center justify-content-center month-btn'>
        <img src={Right_Icon} alt={'right-icon'} />
      </div>
    </div>
  );
};

export default RangeSwitcher;
