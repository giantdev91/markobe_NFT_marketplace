import React, { useEffect, useState } from 'react';
import RewardMethod from '../../../components/client/journeys/reward/rewardmethod';
import Network from '../../../components/client/journeys/reward/network';
import RewardType from '../../../components/client/journeys/reward/rewardtype';
import RewardTypeElement from '../../../components/client/journeys/reward/rewardtypeelement';

import { Button } from 'primereact/button';

import NFTs from '../../../components/client/journeys/reward/nfts';
import Tokens from '../../../components/client/journeys/reward/tokens';
import WhiteList from '../../../components/client/journeys/reward/whitelist';

const JourneysReward = ({ setTab, journey, onStartQuest }) => {
  const [checked, setChecked] = useState('-1');
  const [rewards, setRewards] = useState({
    method: '',
    network: '',
    reward: {},
  });
  const items = [
    { title: 'Karma', type: 'karma' },
    { title: 'NFTs', type: 'nft' },
    { title: 'Tokens', type: 'token' },
    { title: 'Whitelist', type: 'whitelist' },
  ];

  const onChangeMethod = (method) => {
    setRewards({
      ...rewards,
      method: method,
    });
  };

  const onChangeNetwork = (network) => {
    setRewards({
      ...rewards,
      network: network,
    });
  };

  const handleToggle = (index, type) => {
    if (checked == index) {
      setRewards({
        ...rewards,
        reward: {},
      });
      return setChecked('-1');
    }
    setChecked(index);
    switch (type) {
      case 'karma':
        setRewards({
          ...rewards,
          reward: {
            type: 'karma',
          },
        });
        break;
      case 'nft':
        setRewards({
          ...rewards,
          reward: {
            type: 'nft',
            name: '',
            image: '',
            distribution: '',
            collection: '',
            symbol: '',
            network: '',
          },
        });
        break;

      case 'token':
        setRewards({
          ...rewards,
          reward: {
            type: 'token',
            address: '',
            amount: '',
          },
        });
        break;
      case 'whitelist':
        setRewards({
          ...rewards,
          reward: {
            type: 'whitelist',
            title: '',
            description: '',
            image: '',
          },
        });
        break;
      default:
        break;
    }
  };

  const onChangeNFT = (NFT) => {
    setRewards({
      ...rewards,
      reward: NFT,
    });
  };

  const onChangeToken = (token) => {
    setRewards({
      ...rewards,
      reward: token,
    });
  };

  const onChangeWhitelist = (whitelist) => {
    setRewards({
      ...rewards,
      reward: whitelist,
    });
  };

  const prevTab = () => {
    setTab(2);
  };

  const startQuest = () => {
    onStartQuest(rewards);
  };

  const setCheckValue = (type) => {
    switch (type) {
      case 'karma':
        setChecked(0);
        break;
      case 'nft':
        setChecked(1);
        break;
      case 'token':
        setChecked(2);
        break;
      case 'whitelist':
        setChecked(3);
        break;
      default:
        setChecked(-1);
        break;
    }
  };

  useEffect(() => {
    if (journey.rewards) {
      setRewards(journey.rewards);
    }
    if (journey.rewards) {
      setCheckValue(journey.rewards.reward ? journey.rewards.reward.type : '');
    }
  }, [journey]);

  return (
    <>
      <div className="flex flex-row admin-quest-container gap-3">
        <div className="quest-left-containter">
          <RewardMethod value={rewards.method} onChangeMethod={onChangeMethod} />
          <Network value={rewards.network} onChangeNetwork={onChangeNetwork} />
          <div className="quest-reward-card">
            <p className="main-title mb-4">3. Type of reward</p>
            {items.map((item, index) => (
              <RewardTypeElement
                key={index}
                title={item.title}
                checked={checked === index}
                onToggle={() => handleToggle(index, item.type)}
                first={index === 0 ? true : false}
              />
            ))}
          </div>
        </div>
        <div className={`reward-right-container ${checked == 2 ? 'whitelist' : ''} `}>
          {checked == 1 ? <NFTs reward={rewards.reward} onChangeNFT={onChangeNFT} /> : <></>}
          {checked == 2 ? <Tokens reward={rewards.reward} onChangeToken={onChangeToken} /> : <></>}
          {checked == 3 ? (
            <WhiteList reward={rewards.reward} onChangeWhitelist={onChangeWhitelist} />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="admin-align-right quest-entries-btn-group">
        <Button
          label="Back"
          className="p-button-outlined p-button-secondary admin-quest-back-btn"
          onClick={prevTab}
        />
        <Button
          label="Start Quest"
          className="p-button-primary admin-quest-next-btn"
          onClick={startQuest}
        />
      </div>
    </>
  );
};

export default JourneysReward;
