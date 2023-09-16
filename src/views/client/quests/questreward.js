import React, { useState } from 'react';
import RewardMethod from '../../../components/client/questreward/rewardmethod';
import Network from '../../../components/client/questreward/network';
import RewardType from '../../../components/client/questreward/rewardtype';
import RewardTypeElement from '../../../components/client/questreward/rewardtypeelement';

import { Button } from 'primereact/button';

import NFTs from '../../../components/client/questreward/nfts';
import Tokens from '../../../components/client/questreward/tokens';
import WhiteList from '../../../components/client/questreward/whitelist';

const QuestReward = ({ setTab, onStartQuest }) => {
  const [checked, setChecked] = useState('-1');
  const [reward, setReward] = useState({
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
    setReward({
      ...reward,
      method: method,
    });
  };

  const onChangeNetwork = (network) => {
    setReward({
      ...reward,
      network: network,
    });
  };

  const handleToggle = (index, type) => {
    if (checked == index) {
      setReward({
        ...reward,
        reward: {},
      });
      return setChecked('-1');
    }
    setChecked(index);
    switch (type) {
      case 'karma':
        setReward({
          ...reward,
          reward: {
            type: 'karma',
          },
        });
        break;
      case 'nft':
        setReward({
          ...reward,
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
        setReward({
          ...reward,
          reward: {
            type: 'token',
            address: '',
            amount: '',
          },
        });
        break;
      case 'whitelist':
        setReward({
          ...reward,
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
    setReward({
      ...reward,
      reward: NFT,
    });
  };

  const onChangeToken = (token) => {
    setReward({
      ...reward,
      reward: token,
    });
  };

  const onChangeWhitelist = (whitelist) => {
    setReward({
      ...reward,
      reward: whitelist,
    });
  };

  const prevTab = () => {
    setTab(3);
  };

  const startQuest = () => {
    onStartQuest(reward);
  };

  return (
    <>
      <div className="flex flex-row admin-quest-container gap-3">
        <div className="quest-left-containter">
          <RewardMethod onChangeMethod={onChangeMethod} />
          <Network onChangeNetwork={onChangeNetwork} />
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
          {checked == 1 ? <NFTs onChangeNFT={onChangeNFT} /> : <></>}
          {checked == 2 ? <Tokens onChangeToken={onChangeToken} /> : <></>}
          {checked == 3 ? <WhiteList onChangeWhitelist={onChangeWhitelist} /> : <></>}
        </div>
      </div>

      <div className="admin-align-right quest-entries-btn-group">
        <Button
          label="Back"
          className="p-button-outlined p-button-secondary admin-quest-back-btn"
          onClick={prevTab}
        />
        <Button
          label="Start"
          className="p-button-primary admin-quest-next-btn"
          onClick={startQuest}
        />
      </div>
    </>
  );
};

export default QuestReward;
