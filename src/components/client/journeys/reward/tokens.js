import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import Info_Icon from '../../../../assets/img/info.svg';

const Tokens = ({ reward, onChangeToken }) => {
  const [token, setToken] = useState({
    type: 'token',
    address: '',
    amount: '',
  });

  const handleChange = (token) => {
    setToken(token);
    onChangeToken(token);
  };

  useEffect(() => {
    setToken(reward);
  }, [reward]);

  return (
    <div className="reward-card-right">
      <p className="title">Token</p>
      <div className="field">
        <div className="label-row">
          <label htmlFor="title1" className="block">
            Contract address
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={token.address}
          onChange={(e) => handleChange({ ...token, address: e.target.value })}
        />
      </div>
      <div className="field">
        <div className="label-row">
          <label htmlFor="title2" className="block">
            Amount
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title2"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={token.amount}
          onChange={(e) => handleChange({ ...token, amount: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Tokens;
