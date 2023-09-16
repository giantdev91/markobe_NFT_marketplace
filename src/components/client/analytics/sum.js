import React from 'react';

const Sum = ({ title, count, percentage }) => {
  return (
    <>
      <div className="flex flex-column justify-content-between analytics-sum">
        <div className="title">{title}</div>
        <div className="flex align-items-center gap-3 bottom-text-container">
          <div className="count">{count}</div>
          <div className="flex align-items-center justify-content-center percentage ">
            <i
              className="pi pi-arrow-up"
              style={{ fontSize: '12.5px', color: '#1BC28C', marginRight: '7.5px' }}
            ></i>
            {percentage}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Sum;
