import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const SocialContentMedium = ({
  joinmedium,
  addJoinMedium,
  verifymedium,
  addVerifyMedium,
  checkmedium,
  addCheckMedium,
}) => {
  const titles = [
    'Join a Medium server',
    'Verify role in Medium server',
    'Check for Medium name that includes specified characters',
  ];

  return (
    <>
      <div className={`accordion-content-item`} onClick={addJoinMedium}>
        {joinmedium !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[0]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addVerifyMedium}>
        {verifymedium !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[1]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addCheckMedium}>
        {checkmedium !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[2]} </span>
      </div>
    </>
  );
};

export default SocialContentMedium;
