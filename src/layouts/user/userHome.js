import React from 'react';
import { Button } from 'primereact/button';

import { Carousel } from 'primereact/carousel';
import { Chip } from 'primereact/chip';
import { Link } from 'react-router-dom';

import heroImage from './hero-image.svg';
import cardLogo from './aave.svg';
import cardTinyLogoSrc from './tiny-logo.svg';
import cardImageSrc from './card-picture.svg';
import questImage from './default-home-quest-image.svg';

const createCarouselItems = (imageSrc) =>
  [1, 2, 3, 4, 5, 6, 7].map((_, index) => ({
    logoSrc: cardLogo,
    tinyLogoSrc: cardTinyLogoSrc,
    companyName: `Aave #${index}`,
    title: 'Discover, Digest, Delight with Gravitate AI!',
    subtitle:
      'We’ve developed a customizable personalized feed with AI recommendation for news/socials/blogs/video.',
    imageSrc,
  }));

const createCarouselItemsCommunity = (imageSrc) =>
  [1, 2, 3, 4, 5, 6, 7].map((_, index) => ({
    imageSrc,
    title: 'Slack',
    followers: '1.2k',
    questCount: '12',
  }));

const carouselItems1 = createCarouselItems(cardImageSrc);
const carouselItems2 = createCarouselItems(cardImageSrc);
const carouselItems3 = createCarouselItems(questImage);

const carouselItems4 = createCarouselItemsCommunity(questImage);
const carouselItems5 = createCarouselItemsCommunity(questImage);

const CarouselSection = ({ title, items, itemTemplate, numVisible, page }) => (
  <section className="content-main">
    <div className="carousel-header">
      <h3>{title}</h3>
      <a href="#">Show more</a>
    </div>
    <div className="carousel-sections">
      <Carousel
        value={items}
        numVisible={numVisible}
        numScroll={1}
        circular
        itemTemplate={itemTemplate}
        showIndicators={false}
        page={page}
        autoplayInterval={3000}
      />
    </div>
  </section>
);

const Home = () => {
  const itemTemplate = (item) => {
    return (
      <div className="card-container border-round py-5 px-5">
        <Link to="/journey">
          <div className="card-header mb-1">
            <div className="card-logo-container">
              <img src={item.logoSrc} alt="logo" className="card-logo" />
              <span className="card-company-name">{item.companyName}</span>
            </div>
            <img src={item.tinyLogoSrc} alt="tiny logo" className="card-tiny-logo" />
          </div>
          <h2 className="card-title mt-5 flex flex-wrap gap-2">{item.title}</h2>
          <h3 className="card-subtitle">{item.subtitle}</h3>
          <div className="card-footer">
            <img src={item.imageSrc} alt="footer image" className="card-footer-image" />
          </div>
        </Link>
      </div>
    );
  };

  const itemTemplate2 = (item) => {
    return (
      <div className="trending-card-container border-1 surface-border border-round m-2">
        <Link to="/quest" style={{ textDecoration: 'none', color: '#141414' }}>
          <div className="trending-card-header">
            <div className="trending-card-logo-container">
              <img src={item.logoSrc} alt="logo" className="trending-card-logo" />
              <span className="trending-card-company-name">{item.companyName}</span>
            </div>
          </div>
          <div className="trending-card-content">
            <img src={item.imageSrc} alt="content image" className="trending-card-footer-image" />
          </div>
          <h2 className="trending-card-title flex flex-wrap gap-2">{item.title}</h2>
          <div className="card flex flex-wrap gap-2">
            <Chip label="USDT" image={cardLogo} />
            <Chip label="USDT" image={cardLogo} />
          </div>
        </Link>
      </div>
    );
  };

  const itemTemplate3 = (item) => {
    return (
      <div className="mc-card-container flex border-1 surface-border border-round m-2">
        <img src={item.imageSrc} alt="content image" className="mc-card-footer-image" />
        <div className="mc-card-content">
          <div className="mc-card-inner">
            <div className="mc-card-logo-container">
              <img src={item.logoSrc} alt="logo" className="mc-card-logo" />
              <span className="mc-card-company-name">{item.companyName}</span>
            </div>
            <h2 className="trending-card-title flex flex-wrap gap-2">{item.title}</h2>
            <div className="card flex flex-wrap gap-2">
              <Chip label="Karma" />
              <Chip label="NFT" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplateCommunity = (item) => {
    return (
      <div className="community-card-container border-1 surface-border border-round m-2 text-center">
        <div className="community-card-logo-container">
          <img src={cardLogo} />
        </div>
        <div>
          <h4>{item.title}</h4>
          <div className="community-card-stats flex flex-wrap gap-2 justify-content-center">
            <span className="text-gray-500">{item.followers} followers</span>
            <span className="text-gray-500">{item.questCount} quests</span>
          </div>
          <div className="flex flex-wrap justify-content-center">
            <Button label="Follow" className="button-sub" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="hero-section p-d-flex p-jc-between p-px-5">
        <div className="left-hero p-pr-3">
          <div>
            {/* TODO: change h1 and h2 to a proper ones */}
            <h1>
              {/* TODO: remove <br />'s */}
              Your adventure <br /> starts here
            </h1>
            <h3>
              The world’s most popular community management <br /> and analytics platform.
            </h3>
          </div>
          <div className="hero-buttons">
            <Button label="Create your own company" className="main-button" />
            <Button label="Find your community" className="button-sub" />
          </div>
        </div>
        <div className="right-hero">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>

      <CarouselSection
        title="New journey"
        items={carouselItems1}
        itemTemplate={itemTemplate}
        numVisible={3}
        page={3}
      />
      <CarouselSection
        title="Trending quests"
        items={carouselItems2}
        itemTemplate={itemTemplate2}
        numVisible={5}
        page={5}
      />
      <CarouselSection
        title="My quests"
        items={carouselItems3}
        itemTemplate={itemTemplate3}
        numVisible={3}
        page={3}
      />
      <CarouselSection
        title="Trending communities"
        items={carouselItems4}
        itemTemplate={itemTemplateCommunity}
        numVisible={5}
        page={5}
      />
      <CarouselSection
        title="New communities"
        items={carouselItems5}
        itemTemplate={itemTemplateCommunity}
        numVisible={5}
        page={5}
      />
    </div>
  );
};

export default Home;
