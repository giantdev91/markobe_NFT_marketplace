import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';

import Discord_Icon from '../../../assets/img/discord.svg';
import Twitter_Icon from '../../../assets/img/twitter.svg';
import Youtube_Icon from '../../../assets/img/youtube.svg';
import Medium_Icon from '../../../assets/img/medium.svg';
import Telegram_Icon from '../../../assets/img/telegram.svg';

const SocialComponent = ({ type, close_kind, closeActivity, title, comment, onAction }) => {
  const [active, setActive] = useState(true);

  let icon;

  switch (type) {
    case 'Discord':
      icon = Discord_Icon;
      break;
    case 'Twitter':
      icon = Twitter_Icon;
      break;
    case 'Youtube':
      icon = Youtube_Icon;
      break;
    case 'Medium':
      icon = Medium_Icon;
      break;
    case 'Telegram':
      icon = Telegram_Icon;
      break;
    default:
      break;
  }

  const onChangeValue = (value) => {
    onAction({
      value: value,
    });
  };

  return (
    <>
      <div className="activity-item">
        <div className="close-btn">
          <img src={Close_Icon} className="close-btn" onClick={() => closeActivity(close_kind)} />
        </div>
        <div
          className={`flex flex-row align-items-center justify-content-between ${
            active ? 'mb-4' : ''
          }`}
          onClick={() => setActive(!active)}
        >
          <span> {title}</span>
          {active ? (
            <img src={Active_Icon} className="info-img" />
          ) : (
            <img src={Inactive_Icon} className="info-img" />
          )}
        </div>
        {active ? (
          <>
            <div className="ipt-box">
              <div className="label-row">
                <label htmlFor="title1" className="title">
                  URL
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                placeholder={comment}
                className="ipt-txt"
                onChange={(e) => onChangeValue(e.target.value)}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SocialComponent;
