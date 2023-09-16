import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';

import logo from './mark.svg';
import UserDropDown from '../../components/user/userdropdown';
import NetworkDropDown from '../../components/user/networkdropdown';

import ArbitrumIcon from '../../assets/img/user/arbitrum.svg';
import AvalancheIcon from '../../assets/img/user/avalanche.svg';
import PolygonIcon from '../../assets/img/user/polygon.svg';
import FantomIcon from '../../assets/img/user/fantom.svg';
import OptimisnIcon from '../../assets/img/user/optimisn.svg';
import DeafultAvatarIcon from '../../assets/img/user/default-avatar.svg';

const UserHeader = () => {
  const ifRoot = window.location.pathname == '/';
  const [isConnected, setIsConnected] = useState(true);
  const user = {
    name: 'James Smith',
    wallet: '0x32k3...37ee5',
    avatar: DeafultAvatarIcon,
  };
  const menus = [
    {
      text: 'My space',
      path: '',
    },
    {
      text: 'My project',
      path: '',
    },
    {
      text: 'Settings',
      path: '',
    },
    {
      text: 'Disconnect',
      path: '',
    },
  ];

  const networks = [
    {
      icon: ArbitrumIcon,
      text: 'Arbitrum',
      path: '',
    },
    {
      icon: AvalancheIcon,
      text: 'Avalanche',
      path: '',
    },
    {
      icon: PolygonIcon,
      text: 'Polygon',
      path: '',
    },
    {
      icon: FantomIcon,
      text: 'Fantom',
      path: '',
    },
    {
      icon: OptimisnIcon,
      text: 'Optimisn',
      path: '',
    },
  ];
  return (
    <div className="user-navbar" style={{ backgroundColor: ifRoot ? '' : '#EFF3F6' }}>
      <div className="navbar-row">
        <div className="navbar-left">
          <div className="user-logo">
            <NavLink to={'/'}>
              <img src={logo} />
            </NavLink>
          </div>
          <div className="user-navbar-titles">
            <NavLink
              to="/explore"
              className="nav-link p-mr-3"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderRadius: '12px',
                      background: '#833CFC',
                      color: 'white',
                    }
                  : {}
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/community"
              className="nav-link p-mr-3"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderRadius: '12px',
                      background: '#833CFC',
                      color: 'white',
                    }
                  : {}
              }
            >
              Community
            </NavLink>
            <NavLink
              to="/solutions"
              className="nav-link p-mr-3"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderRadius: '12px',
                      background: '#833CFC',
                      color: 'white',
                    }
                  : {}
              }
            >
              Solutions
            </NavLink>
          </div>
        </div>
        <div className="navbar-right">
          {isConnected ? (
            <>
              <NetworkDropDown networks={networks} />
              <UserDropDown menus={menus} user={user} />
              <Button icon="pi pi-bell" className="notification-button" />
            </>
          ) : (
            <>
              <Button label="Connect Wallet" className="button-sub" />{' '}
              {/* TODO: change to wagmi button*/}
              <div className="user-navbar-btn-ring"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
