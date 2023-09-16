import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

import Icon1 from '../../../../assets/img/coin/1.svg';
import Icon2 from '../../../../assets/img/coin/2.svg';
import Icon3 from '../../../../assets/img/coin/3.svg';
import Icon4 from '../../../../assets/img/coin/4.svg';
import Icon5 from '../../../../assets/img/coin/5.svg';
import Icon6 from '../../../../assets/img/coin/6.svg';

const Network = ({ value, onChangeNetwork }) => {
  const [network, setNetwork] = useState('');

  const handleChangeNetwork = (network) => {
    setNetwork(network);
    onChangeNetwork(network);
  };

  // useEffect(() => {
  //   onChangeNetwork(network);
  // }, [network]);
  useEffect(() => {
    setNetwork(value ? value : '');
  }, [value]);
  return (
    <div className="quest-reward-card">
      <p className="main-title mb-3">2. Network</p>
      <div className="flex align-items-center gap-2">
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'Matic' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('Matic')}>
          <img src={Icon1} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'ETC' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('ETC')}>
          <img src={Icon2} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'APT' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('APT')}>
          <img src={Icon3} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'BSC' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('BSC')}>
          <img src={Icon4} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'AVAX' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('AVAX')}>
          <img src={Icon5} />
        </Button>
        <Button
          className={`p-button-secondary network flex-grow-1 ${
            network === 'OP' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeNetwork('OP')}>
          <img src={Icon6} />
        </Button>
      </div>
    </div>
  );
};

export default Network;
