import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const SocialContentTelegram = ({
  jointelegram,
  addJoinTelegram,
  verifytelegram,
  addVerifyTelegram,
  checktelegram,
  addCheckTelegram,
}) => {
  const titles = [
    'Join a Telegram server',
    'Verify role in Telegram server',
    'Check for Telegram name that includes specified characters',
  ];

  return (
    <>
      <div className={`accordion-content-item`} onClick={addJoinTelegram}>
        {jointelegram !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[0]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addVerifyTelegram}>
        {verifytelegram !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[1]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addCheckTelegram}>
        {checktelegram !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[2]} </span>
      </div>
    </>
  );
};

export default SocialContentTelegram;
