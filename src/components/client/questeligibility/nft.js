import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';
import Info_Icon from '../../../assets/img/info.svg';

const NFT = ({ onAction }) => {
  const [count, setCount] = useState(0);
  const [networks, setNetworks] = useState([]);
  const [NFT, setNFT] = useState({
    networks: [],
    contents: ['', ''],
  });

  const showInputs = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <div className="ipt-box">
          <div className="subtitle">
            <label htmlFor={`title${i + 2}`} className="subtitle">
              Input title
              <img src={Info_Icon} className="info-icon" />
            </label>
          </div>
          <InputText
            id={`title${i + 2}`}
            aria-describedby="username1-help"
            className="block"
            onChange={(e) => onChangeContent(i + 2, e.target.value)}
          />
        </div>,
      );
    }
    return inputs;
  };

  const onChangeContent = (index, value) => {
    setNFT((prevNFT) => {
      const newContents = [...prevNFT.contents];

      while (newContents.length <= index) {
        newContents.push('');
      }

      newContents[index] = value;

      return { ...prevNFT, contents: newContents };
    });
  };

  const addOrRemoveNetwork = (network) => {
    if (networks.includes(network)) {
      const updatedNetworks = networks.filter((i) => i !== network);
      setNetworks(updatedNetworks);
    } else {
      setNetworks([...networks, network]);
    }

    if (NFT.networks.includes(network)) {
      const updatedNetworks = NFT.networks.filter((i) => i !== network);
      setNFT((prevNFT) => ({
        ...prevNFT,
        networks: updatedNetworks,
      }));
    } else {
      setNFT((prevNFT) => ({
        ...prevNFT,
        networks: [...prevNFT.networks, network],
      }));
    }
  };

  useEffect(() => {
    onAction(NFT);
  }, [NFT]);

  return (
    <Card className="elegibility-card elegibility-card-nft">
      <p className="title">NFT</p>
      <div className="mb-3">
        <div className="flex align-items-center gap-2 mb-2">
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('Matic') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('Matic')}
          >
            <img src={Icon1} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('ETC') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('ETC')}
          >
            <img src={Icon2} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('APT') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('APT')}
          >
            <img src={Icon3} />
          </Button>
        </div>
        <div className="flex align-items-center gap-2 mb-2">
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('BSC') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('BSC')}
          >
            <img src={Icon4} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('AVAX') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('AVAX')}
          >
            <img src={Icon5} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn ${networks.includes('OP') ? 'active' : ''}`}
            onClick={() => addOrRemoveNetwork('OP')}
          >
            <img src={Icon6} />
          </Button>
        </div>
      </div>
      <div className="ipt-box">
        <div className="subtitle">
          <label htmlFor="title1" className="subtitle">
            Input title
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="block"
          onChange={(e) => onChangeContent(0, e.target.value)}
        />
      </div>
      <div className="ipt-box">
        <div className="subtitle">
          <label htmlFor="title2" className="subtitle">
            Input title
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title2"
          aria-describedby="username1-help"
          className="block"
          onChange={(e) => onChangeContent(1, e.target.value)}
        />
      </div>
      {showInputs()}
      <a href="#" onClick={() => setCount(count + 1)} className="add_more">
        Add more
      </a>
    </Card>
  );
};
export default NFT;
