import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import InputBox from '../inputbox';
import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';
import Info_Icon from '../../../assets/img/info.svg';

const Tokens = ({ onAction }) => {
  const [count, setCount] = useState(0);
  const [networks, setNetworks] = useState([]);
  const [token, setToken] = useState({
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
    setToken((prevToken) => {
      const newContents = [...prevToken.contents];

      while (newContents.length <= index) {
        newContents.push('');
      }

      newContents[index] = value;

      return { ...prevToken, contents: newContents };
    });
  };

  const addOrRemoveNetwork = (network) => {
    if (networks.includes(network)) {
      const updatedNetworks = networks.filter((i) => i !== network);
      setNetworks(updatedNetworks);
    } else {
      setNetworks([...networks, network]);
    }

    if (token.networks.includes(network)) {
      const updatedNetworks = token.networks.filter((i) => i !== network);
      setToken((prevToken) => ({
        ...prevToken,
        networks: updatedNetworks,
      }));
    } else {
      setToken((prevToken) => ({
        ...prevToken,
        networks: [...prevToken.networks, network],
      }));
    }
  };

  useEffect(() => {
    onAction(token);
  }, [token]);

  return (
    <Card className="elegibility-card elegibility-card-token">
      <p className="title">Tokens</p>
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

export default Tokens;
