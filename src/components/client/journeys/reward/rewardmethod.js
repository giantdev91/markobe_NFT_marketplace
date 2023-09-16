import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import Rand_Icon from '../../../../assets/img/random.svg';
import Medal_Icon from '../../../../assets/img/medal.svg';
import Equal_Icon from '../../../../assets/img/equal.svg';
import Soon_Icon from '../../../../assets/img/soon.svg';

const RewardMethod = ({ value, onChangeMethod }) => {
  const [method, setMethod] = useState('');

  const handleChangeMethod = (method) => {
    setMethod(method);
    onChangeMethod(method);
  };

  useEffect(() => {
    setMethod(value ? value : '');
  }, [value]);
  return (
    <div className="quest-reward-card">
      <p className="main-title">1. Method of reward</p>
      <div className="flex flex-wrap align-items-center justify-content-between gap-2 formula">
        <Button
          className={`p-button-secondary formula-element flex-grow-1 ${
            method === 'winners' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeMethod('winners')}>
          <img src={Rand_Icon} />
          <span className="title">Random winners</span>
        </Button>
        <Button
          className={`p-button-secondary formula-element flex-grow-1 ${
            method === 'first' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeMethod('first')}>
          <img src={Medal_Icon} />
          <span className="title">FCFS</span>
        </Button>
        <Button
          className={`p-button-secondary formula-element flex-grow-1 ${
            method === 'distribution' ? 'button-active' : ''
          }`}
          onClick={() => handleChangeMethod('distribution')}>
          <img src={Equal_Icon} />
          <span className="title">Uniform Distribution</span>
        </Button>
        {/* <div className='flex-grow-1 formula-element'>
                    <img src={Rand_Icon}/>
                </div>
                <div className='flex-grow-1 formula-element'>
                    <img src={Medal_Icon}/><span className='title'>FCFS</span>
                </div> */}
        {/* <div className='flex-grow-1 formula-element'>
                    <img src={Equal_Icon}/><span className='title'>Uniform Distribution</span>
                </div> */}
      </div>
      <div className="flex align-items-center justify-content-between gap-3 formula">
        <Button className="p-button-secondary reward_btn flex-grow-1 ">
          Project decides
          <img src={Soon_Icon} className="soon_img" />
        </Button>
        <Button className="p-button-secondary reward_btn flex-grow-1">
          Winners ladder
          <img src={Soon_Icon} className="soon_img" />
        </Button>
        {/* <div className='flex-grow-1  reward_btn' >Project decides<img src={Soon_Icon} className='soon_img'/></div>
                <div className='flex-grow-1  reward_btn' >Winners ladder<img src={Soon_Icon} className='soon_img'/></div>                   */}
      </div>
    </div>
  );
};

export default RewardMethod;
