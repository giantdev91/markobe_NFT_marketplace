import React from 'react';
import { Divider } from 'primereact/divider';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Button } from 'primereact/button';
import QuestCard from '../../components/user/questcard';

import DeafultAvatarIcon from '../../assets/img/user/default-avatar.svg';
import TwitterIcon from '../../assets/img/twitter.svg';
import DiscordIcon from '../../assets/img/discord.svg';
import TelegramIcon from '../../assets/img/telegram.svg';
import MetamaskIcon from '../../assets/img/user/metamask.svg';
import PancakeSwapIcon from '../../assets/img/user/pancakeswap.svg';
import DecentralandIcon from '../../assets/img/user/decentraland.svg';
import UniswapIcon from '../../assets/img/user/uniswap.svg';
import KarmaIcon from '../../assets/img/user/karma.svg';

import NFT1Icon from '../../assets/img/nfts/nft1.svg';
import NFT2Icon from '../../assets/img/nfts/nft2.svg';
import NFT3Icon from '../../assets/img/nfts/nft3.svg';
import NFT4Icon from '../../assets/img/nfts/nft4.svg';
import NFT5Icon from '../../assets/img/nfts/nft5.svg';

import AaveLogo from '../../assets/img/user/aave.svg';
import AlgoLogo from '../../assets/img/user/algo.svg';
import SkyLogo from '../../assets/img/user/sky.svg';
import AaveMain from '../../assets/img/user/aave-main.svg';
import AlgoMain from '../../assets/img/user/algo-main.svg';
import SkyMain from '../../assets/img/user/sky-main.svg';

const WorkspacePage = () => {
  const user = {
    avatar: DeafultAvatarIcon,
    name: 'James Smithwish',
    twitter: {
      label: 'jamessmith',
      url: '',
    },
    discord: {
      label: 'jamessmith',
      url: '',
    },
    telegram: {
      label: 'jamessmith',
      url: '',
    },
    wallet: '0x32k3...37ee5',
    memberSince: '20 Aug 2023',
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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

  const metamaskHeaderTemplate = () => {
    return (
      <>
        <span className="community-title">MetaMask</span>
        <img src={MetamaskIcon} />
      </>
    );
  };
  const pancakeSwapHeaderTemplate = () => {
    return (
      <>
        <span className="community-title">PancakeSwap</span>
        <img src={PancakeSwapIcon} />
      </>
    );
  };
  const decentralLandHeaderTemplate = () => {
    return (
      <>
        <span className="community-title">Decentraland</span>
        <img src={DecentralandIcon} />
      </>
    );
  };
  const uniswapHeaderTemplate = () => {
    return (
      <>
        <span className="community-title">Uniswap</span>
        <img src={UniswapIcon} />
      </>
    );
  };

  return (
    <div className="user-workspace-container">
      <div className="user-workspace-title">
        <h3>Welcome to your space</h3>
      </div>
      <div className="user-workspace-content">
        <div className="user-workspace-left-content">
          <div className="user-profile-container">
            <div className="user-profile">
              <div className="user-avatar">
                <img src={user.avatar} />
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <a href={user.twitter.url} className="user-social-link">
                  <img src={TwitterIcon} />
                  <span>{user.twitter.label}</span>
                </a>
                <p>{user.wallet}</p>
              </div>
            </div>
            <div className="user-social-container">
              <a href={user.discord.url} className="user-social-link">
                <img src={DiscordIcon} />
                <span>{user.discord.label}</span>
              </a>
              <a href={user.telegram.url} className="user-social-link">
                <img src={TelegramIcon} />
                <span>{user.telegram.label}</span>
              </a>
            </div>
            <Divider type="solid" />
            <div className="member-since">
              <span>{`Member since ${user.memberSince}`}</span>
            </div>
          </div>
          <div className="community-container">
            <h3>Community</h3>
            <div className="community-content">
              <Accordion
                activeIndex={0}
                expandIcon="pi pi-chevron-circle-down"
                collapseIcon="pi pi-chevron-circle-up"
              >
                <AccordionTab headerTemplate={metamaskHeaderTemplate}>
                  <Divider type="solid" />
                  <div className="community-accordion-title">
                    <span>Karma</span>
                    <img src={KarmaIcon} />
                  </div>
                  <div className="accordion-tag-list">
                    <span>Technical 100</span>
                    <span>Educational 100</span>
                    <span>Governance 100</span>
                    <span>Social 100</span>
                  </div>
                  <Divider type="solid" />
                  <div className="nft-group">
                    <h3>NFT</h3>
                    <AvatarGroup>
                      <Avatar image={NFT1Icon} size="large" shape="circle" />
                      <Avatar image={NFT2Icon} size="large" shape="circle" />
                      <Avatar image={NFT3Icon} size="large" shape="circle" />
                      <Avatar image={NFT4Icon} size="large" shape="circle" />
                      <Avatar image={NFT5Icon} size="large" shape="circle" />
                      <Avatar
                        label="+5"
                        shape="circle"
                        size="large"
                        style={{ backgroundColor: 'white', color: '#141414B2' }}
                      />
                    </AvatarGroup>
                  </div>
                </AccordionTab>
                <AccordionTab headerTemplate={pancakeSwapHeaderTemplate}>
                  <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                  </p>
                </AccordionTab>
                <AccordionTab headerTemplate={decentralLandHeaderTemplate}>
                  <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </AccordionTab>
                <AccordionTab headerTemplate={uniswapHeaderTemplate}>
                  <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="user-workspace-right-content">
          <div className="button-group">
            <Button label="New" className="active" />
            <Button label="Pending" />
            <Button label="Claimable" />
            <Button label="Missed" />
            <Button label="Journey" />
          </div>
          <div className="quest-list">
            {quests.map((quest, index) => (
              <QuestCard key={index} quest={quest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
