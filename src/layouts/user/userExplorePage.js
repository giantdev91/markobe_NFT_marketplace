import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { Chip } from 'primereact/chip';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'primereact/togglebutton';

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
    title: 'Discover, Digest, Delight with Gravitate AI!',
    subtitle:
      'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
    imageSrc: cardImageSrc,
  });

const questItems = createCarouselItems();

const FilterSection = ({ title, items, filter }) => (
  <div className="explore-filters">
    <h3>{title}</h3>
    <div
      className={
        filter && filter.includes('chains')
          ? 'explore-filters-inner-chains'
          : 'explore-filters-inner'
      }
    >
      {items.map((item) => (
        <ToggleButton checked={false} onLabel={item} offLabel={item} />
      ))}
    </div>
  </div>
);

const ExplorePage = () => {
  const [onlyMyCommunities, setOnlyMyCommunities] = useState(false);
  const [latestAdded, setLatestAdded] = useState(true);

  const cardTemplate = (item) => (
    <div className="trending-card-container border-1 surface-border border-round">
      <Link to="/quest">
        <div className="trending-card-header">
          <div className="trending-card-logo-container">
            <img src={item.logoSrc} alt="logo" className="trending-card-logo" />
            <span className="trending-card-company-name">{item.companyName}</span>
          </div>
        </div>
        <div className="trending-card-content">
          <img src={item.imageSrc} alt="content image" className="trending-card-footer-image" />
        </div>
        <span className="trending-card-title flex flex-wrap gap-2">{item.title}</span>
        <div className="card flex flex-wrap gap-2">
          <Chip label="USDT" image={cardLogo} />
          <Chip label="USDT" image={cardLogo} />
        </div>
      </Link>
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
      <FilterSection title="Project category" items={testCategories} />
      <div className="status-and-chain-filters">
        <FilterSection title="Reward type" items={['Karma', 'Token', 'NFT', 'All']} />
        <FilterSection title="Status" items={['Ongoing', 'Pending', 'Ended']} />
        <FilterSection title="Chains" filter="chains" items={['ETH', 'ARB', 'MATIC', 'BSC']} />
      </div>
      <div className="cards-container">
        <div className="cards">{questItems.map(cardTemplate)}</div>
      </div>
    </div>
  );
};

export default ExplorePage;
