import ElegibilityGroup from '../../../../components/client/questeligibility/elegibilitygroup';
import NFT from '../../../../components/client/questeligibility/nft';
import Tokens from '../../../../components/client/questeligibility/tokens';
import Specific from '../../../../components/client/questeligibility/specific';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Soon_Icon from '../../../../assets/img/soon.svg';

const JourneyQuestEligibility = ({ setTab, onQuestEligibilitySave }) => {
  const [checked, setChecked] = useState('-1');
  const [eligibility, setEligibility] = useState({});

  const items = [
    { title: 'All users', comment: 'All participants can pass this quest', type: 'All users' },
    {
      title: 'NFTs holder',
      comment: 'Users with a certain NFT can participate',
      type: 'NFTs holder',
    },
    {
      title: 'Tokens holder',
      comment: 'Users with a certain token can participate',
      type: 'Tokens holder',
    },
    {
      title: 'Specific role',
      comment: 'Your community members with a specific role in discord can take a part',
      type: 'Specific role',
    },
  ];

  const handleToggle = (index, type) => {
    if (checked == index) {
      setEligibility({});
      return setChecked('-1');
    }
    setChecked(index);
    switch (type) {
      case 'All users':
        setEligibility({
          type: type,
        });
        break;
      case 'NFTs holder':
      case 'Tokens holder':
        setEligibility({
          type: type,
          networks: [],
          contents: [],
        });
        break;
      case 'Specific role':
        setEligibility({
          type: type,
          roleID: '',
          discordID: '',
          contents: [],
        });
        break;
      default:
        break;
    }
  };

  const nextTab = () => {
    onQuestEligibilitySave(eligibility);
    setTab(4);
  };

  const prevTab = () => {
    setTab(2);
  };

  const onChangeNFT = (nft) => {
    setEligibility({
      type: 'NFTs holder',
      networks: nft.networks,
      contents: nft.contents,
    });
  };

  const onChangeToken = (token) => {
    setEligibility({
      type: 'Tokens holder',
      networks: token.networks,
      contents: token.contents,
    });
  };

  const onChangeSpecific = (specific) => {
    setEligibility({
      type: 'Specific role',
      roleID: specific.roleID,
      discordID: specific.discordID,
      contents: specific.contents,
    });
  };

  return (
    <div className="">
      <div className="flex flex-row justify-content-between gap-3 admin-quest-container quest-eligibility-container">
        <div className="quest-left-containter">
          <div>
            <span className="quest-eligibility-title">
              Select what access requirement to pass this quest
            </span>
          </div>
          {items.map((item, index) => (
            <ElegibilityGroup
              key={index}
              content={item}
              active={checked === index}
              onToggle={() => handleToggle(index, item.type)}
              first={false}
            />
          ))}

          <div className="quest-eligibility-group">
            <div>
              <div className="flex align-items-center">
                <p className="title">Amount of karma</p>
                <img src={Soon_Icon} className="soon_img" />
              </div>
              <p className="comment">Community members with a certain Karma can take a part</p>
            </div>
          </div>
          <div className="quest-eligibility-group">
            <div>
              <div className="flex align-items-center">
                <p className="title">Old users</p>
                <img src={Soon_Icon} className="soon_img" />
              </div>
              <p className="comment">
                Users with old wallets and discord can take part in this quest
              </p>
            </div>
          </div>
          <div className="quest-eligibility-group">
            <div>
              <div className="flex align-items-center">
                <p className="title">With user experience</p>
                <img src={Soon_Icon} className="soon_img" />
              </div>
              <p className="comment">
                Users who have at least 1 interaction who your smart contract
              </p>
            </div>
          </div>
          <div className="quest-eligibility-group">
            <div>
              <div className="flex align-items-center">
                <p className="title">New users</p>
                <img src={Soon_Icon} className="soon_img" />
              </div>
              <p className="comment">
                Only users who have not passed any quests can pass the quest
              </p>
            </div>
          </div>
        </div>
        <div className="quest-right-container">
          {/* { checked == -1 ?
						  	<div className="quest-entries-active-element">
							<p className="quest-entries-comment">You have no active tasks yet<br/>Please, pick the ones you need from the <br/>block on the left</p>
							</div>
						: <></>
						}	 */}
          {checked == 1 ? <NFT onAction={onChangeNFT} /> : <></>}
          {checked == 2 ? <Tokens onAction={onChangeToken} /> : <></>}
          {checked == 3 ? <Specific onAction={onChangeSpecific} /> : <></>}
        </div>
      </div>
      <div className="admin-align-right quest-entries-btn-group">
        <Button
          label="Back"
          className="p-button-outlined p-button-secondary admin-quest-back-btn"
          onClick={prevTab}
        />
        <Button label="Next" className="p-button-primary admin-quest-next-btn" onClick={nextTab} />
      </div>
    </div>
  );
};

export default JourneyQuestEligibility;
