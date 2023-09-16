import React from 'react';
import {Link} from 'react-router-dom';
import UsdtIcon from '../../assets/img/usdt.svg';
const QuestCard = ({quest}) => {
  return (
    <div className="user-quest-card-container">
      <Link to="/quest" style={{textDecoration: 'none', color: '#141414'}}>
        <div className="user-quest-card-header">
          <div className="user-quest-card-title">
            <img src={quest.avatar} />
            <h3>{quest.name}</h3>
          </div>
          <div className="user-quest-card-status">
            <span>Ongoing</span>
          </div>
        </div>
        <div className="user-quest-card-image">
          <img src={quest.img} />
        </div>
        <div className="user-quest-card-content">
          <div className="user-quest-date">
            <span className='pi pi-calendar'></span>
            <span>{quest.date}</span>
          </div>
          <div className='user-quest-content'>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
          </div>
        </div>
        <div className='user-quest-card-tags'>
          {
            quest.tags.map((tag, index) => {
              return (
                <React.Fragment key={`${index}`}>
                  {tag === 'USDT' && (
                    <span>
                      <img src={UsdtIcon} />
                      <span>{tag}</span>
                    </span>
                  )}

                  {tag !== 'USDT' && (
                    <span>{tag}</span>
                  )}
                </React.Fragment>
              );
            })
          }
        </div>
      </Link>
    </div>
  );
};

export default QuestCard;
