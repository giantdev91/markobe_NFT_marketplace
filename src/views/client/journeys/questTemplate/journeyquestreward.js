import React, { useState, useEffect } from 'react';
import RewardMethod from '../../../../components/client/questreward/rewardmethod';
import Network from '../../../../components/client/questreward/network';
import RewardType from '../../../../components/client/questreward/rewardtype';
import RewardTypeElement from '../../../../components/client/questreward/rewardtypeelement';

import { Button } from 'primereact/button';

import NFTs from '../../../../components/client/questreward/nfts';
import Tokens from '../../../../components/client/questreward/tokens';
import WhiteList from '../../../../components/client/questreward/whitelist';

const JourneyQuestReward = ({ setTab, onStartQuest }) => {
  const [checked, setChecked] = useState([]);
  const [rewards, setRewards] = useState({ method: '', network: '', items: [] });
  const [reward, setReward] = useState([]);
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
    const checkedIndex = checked.findIndex((check) => check == index);
    if (checkedIndex !== -1) {
      //delete check
      setChecked((prevChecked) => prevChecked.filter((check) => check != index));
      // delete reward
      setReward((prevReward) => prevReward.filter((rwd, idx) => idx != checkedIndex));
      return;
    }
    // if (checked == index) {
    //   setReward({
    //     ...reward,
    //     reward: {},
    //   });
    //   return setChecked('-1');
    // }

    // add check
    // setChecked(index);
    setChecked([...checked, index]);
    // add new reward
    // switch (type) {
    //   case 'karma':
    //     setReward({
    //       ...reward,
    //       reward: {
    //         type: 'karma',
    //       },
    //     });
    //     break;
    //   case 'nft':
    //     setReward({
    //       ...reward,
    //       reward: {
    //         type: 'nft',
    //         name: '',
    //         image: '',
    //         distribution: '',
    //         collection: '',
    //         symbol: '',
    //         network: '',
    //       },
    //     });
    //     break;

    //   case 'token':
    //     setReward({
    //       ...reward,
    //       reward: {
    //         type: 'token',
    //         address: '',
    //         amount: '',
    //       },
    //     });
    //     break;
    //   case 'whitelist':
    //     setReward({
    //       ...reward,
    //       reward: {
    //         type: 'whitelist',
    //         title: '',
    //         description: '',
    //         image: '',
    //       },
    //     });
    //     break;
    //   default:
    //     break;
    // }
    switch (type) {
      case 'karma':
        setReward([
          ...reward,
          {
            type: 'karma',
          },
        ]);
        break;
      case 'nft':
        setReward([
          ...reward,
          {
            type: 'nft',
            name: '',
            image: '',
            distribution: '',
            collection: '',
            symbol: '',
            network: '',
          },
        ]);
        break;

      case 'token':
        setReward([
          ...reward,
          {
            type: 'token',
            address: '',
            amount: '',
          },
        ]);
        break;
      case 'whitelist':
        setReward([
          ...reward,
          {
            type: 'whitelist',
            title: '',
            description: '',
            image: '',
          },
        ]);
        break;
      default:
        break;
    }
    return;
  };

  const onChangeNFT = (NFT) => {
    const checkedIndex = checked.findIndex((check) => check == 1);
    if (checkedIndex !== -1) {
      let rewardTemp = reward;
      rewardTemp[checkedIndex] = NFT;
      setReward(rewardTemp);
    }
    // setReward({
    //   ...reward,
    //   reward: NFT,
    // });
  };

  const onChangeToken = (token) => {
    const checkedIndex = checked.findIndex((check) => check == 2);
    if (checkedIndex !== -1) {
      let rewardTemp = reward;
      rewardTemp[checkedIndex] = token;
      setReward(rewardTemp);
    }
    // setReward({
    //   ...reward,
    //   reward: token,
    // });
  };

  const onChangeWhitelist = (whitelist) => {
    const checkedIndex = checked.findIndex((check) => check == 3);
    if (checkedIndex !== -1) {
      let rewardTemp = reward;
      rewardTemp[checkedIndex] = whitelist;
      setReward(rewardTemp);
    }
    // setReward({
    //   ...reward,
    //   reward: whitelist,
    // });
  };

  const prevTab = () => {
    setTab(3);
  };

  const startQuest = () => {
    onStartQuest({
      ...rewards,
      items: reward,
    });
  };

  useEffect(() => {}, [checked]);

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
                checked={checked.findIndex((check) => check === index) > -1}
                onToggle={() => handleToggle(index, item.type)}
                first={index === 0 ? true : false}
              />
            ))}
          </div>
        </div>
        <div
          className={`reward-right-container ${
            checked[checked.length - 1] === 2 ? 'whitelist' : ''
          } `}>
          {checked[checked.length - 1] == 1 ? <NFTs onChangeNFT={onChangeNFT} /> : <></>}
          {checked[checked.length - 1] == 2 ? <Tokens onChangeToken={onChangeToken} /> : <></>}
          {checked[checked.length - 1] == 3 ? (
            <WhiteList onChangeWhitelist={onChangeWhitelist} />
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
          label="Save"
          className="p-button-primary admin-quest-next-btn"
          onClick={startQuest}
        />
      </div>
    </>
  );
};

export default JourneyQuestReward;
