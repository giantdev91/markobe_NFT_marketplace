import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';

const Network = ({ onChangeNetwork }) => {
  const [network, setNetwork] = useState('');

  useEffect(() => {
    onChangeNetwork(network);
  }, [network]);

  return (
    <div className="quest-reward-card">
      <p className="main-title mb-3">2. Network</p>
      <div className="flex align-items-center gap-2">
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'Matic' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('Matic')}
        >
          <img src={Icon1} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'ETC' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('ETC')}
        >
          <img src={Icon2} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'APT' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('APT')}
        >
          <img src={Icon3} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'BSC' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('BSC')}
        >
          <img src={Icon4} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'AVAX' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('AVAX')}
        >
          <img src={Icon5} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'OP' ? 'button-active' : ''
          }`}
          onClick={() => setNetwork('OP')}
        >
          <img src={Icon6} />
        </Button>
      </div>
    </div>
  );
};

export default Network;
