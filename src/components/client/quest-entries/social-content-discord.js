import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const SocialContentDiscord = ({
  joindiscord,
  addJoinDiscord,
  verifydiscord,
  addVerifyDiscord,
  checkdiscord,
  addCheckDiscord,
}) => {
  const titles = [
    'Join a discord server',
    'Verify role in Discord server',
    'Check for Discord name that includes specified characters',
  ];

  return (
    <>
      <div className={`accordion-content-item`} onClick={addJoinDiscord}>
        {joindiscord !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[0]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addVerifyDiscord}>
        {verifydiscord !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[1]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addCheckDiscord}>
        {checkdiscord !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[2]} </span>
      </div>
    </>
  );
};

export default SocialContentDiscord;
