import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { Chip } from 'primereact/chip';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';

import cardLogo from './aave.svg';
import cardImageSrc from './card-picture.svg';

const testCategories = [
  'DeFi',
  'NFT',
  'DAO',
  'Social',
  'Gaming',
  'Infrastructure',
  'Privacy',
  'Other',
];

const createCarouselItems = () =>
  Array(11).fill({
    logoSrc: cardLogo,
    companyName: 'Aave',
    followersCount: 141,
    questsCount: 5,
    subtitle:
      'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
    imageSrc: cardImageSrc,
  });

const questItems = createCarouselItems();

const CommunityPage = () => {
  const [onlyMyCommunities, setOnlyMyCommunities] = useState(false);
  const [latestAdded, setLatestAdded] = useState(true);

  const cardTemplate = (item) => (
    <div className="community-card-container border-1 surface-border border-round m-2 text-center">
      <div className="community-card-logo-container">
        <img src={cardLogo} />
      </div>
      <div>
        <h4>{item.title}</h4>
        <div className="community-card-stats flex flex-wrap gap-2 justify-content-center">
          <span className="text-gray-500">{item.followersCount} followers</span>
          <span className="text-gray-500">{item.questsCount} quests</span>
        </div>
        <div className="flex flex-wrap justify-content-center">
          <Button label="Following" className="button-sub" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="explore-main">
      <div className="explore-top-section">
        <span className="p-input-icon-left explore-search">
          <i className="pi pi-search" />
          <InputText placeholder="Community name" />
        </span>
        <div className="explore-top-toggles">
          <div>
            <span className="explore-toggle-label">Only my communities</span>
            <div
              className={`explore-toggle ${onlyMyCommunities ? 'on' : ''}`}
              onClick={() => setOnlyMyCommunities(!onlyMyCommunities)}
            >
              <div className="round"></div>
            </div>
          </div>
          <div>
            <span className="explore-toggle-label">Latest added</span>
            <div
              className={`explore-toggle ${latestAdded ? 'on' : ''}`}
              onClick={() => setLatestAdded(!latestAdded)}
            >
              <div className="round"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards">{questItems.map(cardTemplate)}</div>
      </div>
    </div>
  );
};

export default CommunityPage;
