import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';

import tinyAvatar from './tiny-avatar.svg';
import tinyAvatar2 from './tiny-avatar-2.svg';
import twitterIcon from './twitter-icon.svg';
import greenCheckmark from './green-checkmark.svg';
import AaveLogo from '../../assets/img/user/aave.svg';
import YoutubeIcon from '../../assets/img/youtube.svg';
import StarIcon from '../../assets/img/star.svg';
import MediumIcon from '../../assets/img/medium.svg';
import shuffle from './shuffle.svg';

const QuestPage = () => {
  const createHeader = (isCompleted = false) => (
    <div className="flex align-items-center">
      <img src={twitterIcon} alt="twitter icon" className="quest-task-icon" />
      <span className="vertical-align-middle">Follow on Twitter</span>
      {isCompleted && (
        <img src={greenCheckmark} alt="green checkmark" className="quest-task-check" />
      )}
    </div>
  );

  const createYoutubeHeader = (isCompleted = false) => (
    <div className="flex align-items-center">
      <img src={YoutubeIcon} alt="twitter icon" className="quest-task-icon" />
      <span className="vertical-align-middle">Watch “video name” on YouTube</span>
      {isCompleted && (
        <img src={greenCheckmark} alt="green checkmark" className="quest-task-check" />
      )}
    </div>
  );

  const createStarHeader = (isCompleted = false) => (
    <div className="flex align-items-center">
      <img src={StarIcon} alt="twitter icon" className="quest-task-icon" />
      <span className="vertical-align-middle">Community decision votes</span>
      {isCompleted && (
        <img src={greenCheckmark} alt="green checkmark" className="quest-task-check" />
      )}
    </div>
  );

  const createMediumHeader = (isCompleted = false) => (
    <div className="flex align-items-center">
      <img src={MediumIcon} alt="twitter icon" className="quest-task-icon" />
      <span className="vertical-align-middle">Read article on Medium</span>
      {isCompleted && (
        <img src={greenCheckmark} alt="green checkmark" className="quest-task-check" />
      )}
    </div>
  );

  const loremText = (
    <div>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />
      <a href="#" style={{ textDecoration: 'none', color: 'rgba(48, 92, 246, 1)' }}>
        see more
      </a>
    </div>
  );

  return (
    <div className="user-quest-container">
      <div className="quest-info">
        <Card title="Reward" className="quest-info-card md:w-21rem">
          <div className="quest-reward-info">
            <span>Token</span>
            <div className="quest-reward-specific">
              <img src={tinyAvatar} alt="tiny avatar" className="quest-token-icon" />
              <span>1000 ETH</span>
            </div>
          </div>
          <Divider />
          <div>
            <div className="quest-info-subheader">Karma</div>
            <div>
              <div className="quest-info-karma">
                <Chip className="quest-info-karma-chip" label="Technical 100" />
                <Chip className="quest-info-karma-chip" label="Governance 300" />
                <Chip className="quest-info-karma-chip" label="Social 50" />
                <Chip className="quest-info-karma-chip" label="Educational 100" />
              </div>
              <Chip className="chip-winners" image={shuffle} label="Random winners" />
            </div>
          </div>
        </Card>
        <Button label="Claim reward" className="claim-button-sub" />
        <div className="quest-info-participants-header">All participants (510)</div>
        <AvatarGroup>
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar image={tinyAvatar2} size="normal" shape="circle" />
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar image={tinyAvatar2} size="normal" shape="circle" />
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar image={tinyAvatar2} size="normal" shape="circle" />
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar image={tinyAvatar2} size="normal" shape="circle" />
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar image={tinyAvatar2} size="normal" shape="circle" />
          <Avatar image={tinyAvatar} size="normal" shape="circle" />
          <Avatar
            label="+10"
            shape="circle"
            size="normal"
            style={{
              backgroundColor: 'white',
              color: 'rgba(20, 20, 20, 0.70)',
              border: '0.2px solid rgba(20, 20, 20, 0.20)',
            }}
          />
        </AvatarGroup>
      </div>
      <div className="quest-content">
        <h2>Discover, Digest, Delight with Gravitate AI!</h2>
        <div className="quest-subinfo">
          <Chip
            label="2023/05/12 14:30 ~ 2023/05/16 14:30 (UTC+02:00)"
            icon="pi pi-calendar"
            className="quest-date"
          />
          <img src={AaveLogo} />
          <span>Aave</span>
          <Button label="Follow" />
        </div>
        <div className="quest-description">
          <h4>Description</h4>
          <span>About Yuliverse</span>
          <div>{loremText}</div>
        </div>
        <div className="card quest-activity">
          <Accordion
            multiple
            expandIcon="pi pi-chevron-circle-down"
            collapseIcon="pi pi-chevron-circle-up"
          >
            <AccordionTab header={createYoutubeHeader()}>
              <div className="youtube-content">
                <Button label="Watch" />
                <Button label="Verify" outlined />
              </div>
            </AccordionTab>
            <AccordionTab header={createHeader()}>
              <div className="quote-content">
                <p>You should make a quote that includes:</p>
                <p>The first time used the platform for ETH Staking. #DEFI #StakingETH #ETH #LSD</p>
                <div className="quote-button">
                  <Button label="Quote" />
                  <Button label="Verify" />
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header={createStarHeader(true)}>
              <div className="star-content">
                <p>Company X wants to create a rewards program for active users of our protocol?</p>
                <div className="star-button">
                  <Button label="Verify" />
                </div>
                <div className="ul-container">
                  <p>Voting in what form would you like to receive rewards</p>
                  <ul className="form-ul">
                    <li className="list-item">
                      <Checkbox name="form" />
                      <label className="ml-2">NFT</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" checked />
                      <label className="ml-2">Stablecoin</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" />
                      <label className="ml-2">MEME coins</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" />
                      <label className="ml-2">Branded merchandise</label>
                    </li>
                  </ul>
                </div>
                <div className="ul-container">
                  <p>Voting in what form would you like to receive rewards</p>
                  <ul className="form-ul">
                    <li className="list-item">
                      <Checkbox name="form" />
                      <label className="ml-2">NFT</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" checked />
                      <label className="ml-2">Stablecoin</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" checked />
                      <label className="ml-2">MEME coins</label>
                    </li>
                    <li className="list-item">
                      <Checkbox name="form" />
                      <label className="ml-2">Branded merchandise</label>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header={createMediumHeader()}>{loremText}</AccordionTab>
            <AccordionTab header={createHeader()}>{loremText}</AccordionTab>
            <AccordionTab header={createHeader(true)}>{loremText}</AccordionTab>
          </Accordion>
          <Panel className="all-done-panel">
            <div className="m-0 all-done-message">
              <img src={greenCheckmark} alt="green checkmark" />
              <p>
                You have completed all the quests, the reward will be drawn after the countdown is
                over.
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default QuestPage;
