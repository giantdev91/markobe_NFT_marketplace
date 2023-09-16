import React from 'react';
import QuestCard from '../../components/user/questcard';
import JourneyMainImage from '../../assets/img/user/journey-main-image.svg';
import AaveLogo from '../../assets/img/user/aave.svg';
import AlgoLogo from '../../assets/img/user/algo.svg';
import SkyLogo from '../../assets/img/user/sky.svg';
import AaveMain from '../../assets/img/user/aave-main.svg';
import AlgoMain from '../../assets/img/user/algo-main.svg';
import SkyMain from '../../assets/img/user/sky-main.svg';

const JourneyPage = () => {
  const journey = {
    title: 'Discover, Digest, Delight with Gravitate AI!',
    date: '2023/05/12 14:30 (UTC+02:00)',
    subtitle: 'About Yuliverse',
    mainImage: JourneyMainImage,
  };

  const quests = [
    {
      id: 1,
      avatar: AaveLogo,
      name: 'Aave',
      status: 0,
      img: AaveMain,
      date: '09.09.23 - 09.12.23 (2PM)',
      title: 'Discover, Digest, Delight with Gravitate AI!',
      description:
        'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
      tags: ['USDT', 'Karma', 'Token', 'NFT'],
    },
    {
      id: 2,
      avatar: AlgoLogo,
      name: 'Algo',
      status: 0,
      img: AlgoMain,
      date: '09.09.23 - 09.12.23 (2PM)',
      title: 'Discover, Digest, Delight with Gravitate AI!',
      description:
        'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
      tags: ['USDT', 'Karma', 'Token', 'NFT'],
    },
    {
      id: 3,
      avatar: SkyLogo,
      name: 'Sky',
      status: 0,
      img: SkyMain,
      date: '09.09.23 - 09.12.23 (2PM)',
      title: 'Discover, Digest, Delight with Gravitate AI!',
      description:
        'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
      tags: ['USDT', 'Karma', 'Token', 'NFT'],
    },
  ];

  return (
    <div className="user-journey-container">
      <div className="user-journey-main">
        <div className="user-journey-left-content">
          <h3 className="title">{journey.title}</h3>
          <span className="date">
            <span className="pi pi-calendar"></span>
            <span>{journey.date}</span>
          </span>
          <h3 className="subtitle">{journey.subtitle}</h3>
          <p className="content">
            Yuliverse is a seek to earn gamefi + socialfi inspired by Pokemon Go and Tinder, targets
            p2e players and Pokemon Go players which is looking for a richer gaming experiences.
          </p>
          <p className="content">
            By offering innovative offline urban treasure hunt and social experience in Web3
            application, we attract players with revenue, retain players with social play, and
            finally drive players to real-world merchants or other valuable business activities...{' '}
          </p>
          <a className="see-more">See more</a>
        </div>
        <div className="user-journey-right-image">
          <img src={journey.mainImage} />
        </div>
      </div>
      <div className="user-journey-quest-list-container">
        <div className="user-journey-quest-list-title">
          <h3>Quest list</h3>
        </div>
        <div className="user-journey-quest-list">
          {quests.map((quest, index) => (
            <QuestCard key={index} quest={quest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
