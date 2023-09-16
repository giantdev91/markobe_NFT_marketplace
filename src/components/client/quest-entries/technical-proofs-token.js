import React from 'react';
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState, useEffect } from 'react';

const TechnicalProofsToken = ({ closeActivity, onAction }) => {
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const [networks, setNetworks] = useState([]);
  const [durations, setDurations] = useState([]);

  const [token, setToken] = useState({
    description: '',
    smartContract: '',
    amount: '',
    ticker: '',
    networks: [],
    durations: [],
    links: [],
  });

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

  const addOrRemoveDuration = (duration) => {
    if (durations.includes(duration)) {
      const updatedDurations = durations.filter((i) => i !== duration);
      setDurations(updatedDurations);
    } else {
      setDurations([...durations, duration]);
    }

    if (token.durations.includes(duration)) {
      const updatedDurations = token.durations.filter((i) => i !== duration);
      setToken((prevToken) => ({
        ...prevToken,
        durations: updatedDurations,
      }));
    } else {
      setToken((prevToken) => ({
        ...prevToken,
        durations: [...prevToken.durations, duration],
      }));
    }
  };

  const onChangeLink = (index, value) => {
    setToken((prevToken) => {
      const newLinks = [...prevToken.links];

      while (newLinks.length <= index) {
        newLinks.push('');
      }

      newLinks[index] = value;
      return {
        ...prevToken,
        links: newLinks,
      };
    });
  };

  useEffect(() => {
    onAction(token);
  }, [token]);

  const showInputs = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <InputText
          key={i + 1}
          title="Enterlink where to make interaction"
          comment="Enter"
          onChange={(e) => onChangeLink(i + 1, e.target.value)}
        />,
      );
    }
    return inputs;
  };

  return (
    <>
      <div className="activity-item">
        <div className="close-btn">
          <img
            src={Close_Icon}
            className="close-btn"
            onClick={() => closeActivity('TechnicalProofsToken')}
          />
        </div>
        <div
          className={`flex flex-row align-items-center justify-content-between ${
            active ? 'mb-4' : ''
          }`}
          onClick={() => setActive(!active)}
        >
          <span>Proofs of token</span>
          {active ? (
            <img src={Active_Icon} className="info-img" />
          ) : (
            <img src={Inactive_Icon} className="info-img" />
          )}
        </div>
        {active ? (
          <>
            <div className="ipt-box">
              <div className="label-row">
                <label htmlFor="title1" className="title">
                  Description
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                className="ipt-txt"
                placeholder="Enter answer"
                style={{ width: '100%' }}
                onChange={(e) => setToken({ ...token, description: e.target.value })}
              />
            </div>
            <div className="ipt-box">
              <div className="flex align-items-center justify-content-between label-row">
                <label htmlFor="title1" className="title">
                  Smart Contract for the protocol
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                placeholder="Enter the answer"
                className="ipt-txt"
                onChange={(e) => setToken({ ...token, smartContract: e.target.value })}
              />
            </div>
            <div className="ipt-box">
              <div className="flex align-items-center justify-content-between label-row">
                <label htmlFor="title1" className="title">
                  Amount of token
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                placeholder="Enter the answer"
                className="ipt-txt"
                onChange={(e) => setToken({ ...token, amount: e.target.value })}
              />
            </div>
            <div className="ipt-box">
              <div className="flex align-items-center justify-content-between label-row">
                <label htmlFor="title1" className="title">
                  Ticker
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                placeholder="Enter the answer"
                className="ipt-txt"
                onChange={(e) => setToken({ ...token, ticker: e.target.value })}
              />
            </div>
            <div className="ipt-box">
              <span className="title">Network</span>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('Matic') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('Matic')}
                >
                  Matic
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('ETC') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('ETC')}
                >
                  ETC
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('APT') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('APT')}
                >
                  APT
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('BSC') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('BSC')}
                >
                  BSC
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('AVAX') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('AVAX')}
                >
                  AVAX
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    networks.includes('OP') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveNetwork('OP')}
                >
                  OP
                </div>
              </div>
            </div>
            <div className="ipt-box">
              <span className="title">Token duration</span>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    durations.includes('24h') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveDuration('24h')}
                >
                  24h
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    durations.includes('7d') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveDuration('7d')}
                >
                  7d
                </div>
                <div
                  className={`flex align-items-center justify-content-center option-btn ${
                    durations.includes('14d') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveDuration('14d')}
                >
                  14d
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <div
                  className={`flex align-items-center justify-content-center option-btn-long ${
                    durations.includes('30d') ? 'active' : ''
                  }`}
                  onClick={() => addOrRemoveDuration('30d')}
                >
                  30d
                </div>
              </div>
            </div>
            <div className="ipt-box">
              <div className="flex align-items-center justify-content-between label-row">
                <label htmlFor="title1" className="title">
                  Enterlink where to make interaction
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                placeholder="Enter"
                className="ipt-txt"
                onChange={(e) => onChangeLink(0, e.target.value)}
              />
            </div>
            {showInputs()}
            <div className="add-more">
              <a href="#" onClick={() => setCount(count + 1)}>
                Add more
              </a>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TechnicalProofsToken;
