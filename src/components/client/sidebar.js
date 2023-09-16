import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/mark.svg';
import dashboard from '../../assets/img/buttons/dashboard.svg';
import quests from '../../assets/img/buttons/quests.svg';
import journeys from '../../assets/img/buttons/journeys.svg';
import settings from '../../assets/img/buttons/settings.svg';
import analytics from '../../assets/img/buttons/analytics.svg';
import dashboard_a from '../../assets/img/buttons/dashboard_a.svg';
import quests_a from '../../assets/img/buttons/quests_a.svg';
import journeys_a from '../../assets/img/buttons/journeys_a.svg';
import settings_a from '../../assets/img/buttons/settings_a.svg';
import analytics_a from '../../assets/img/buttons/analytics_a.svg';

const ClientSidebar = ({ visible }) => {
  const [visibleLeft, setVisibleLeft] = useState(true);
  const location = useLocation();

  // sidebar hide and show
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  let trans = { transform: null };
  if (sidebarShow) {
    console.log('sidebarShow => ', sidebarShow);
    trans = { transform: 'translateX(100%) !important' };
    dispatch({ type: 'set', sidebarShow: false });
  }

  return (
    <>
      <div className="admin-sidebar" style={trans}>
        <div className="admin-logo">
          <img src={logo} />
        </div>
        <div className="sidebar-item">
          <Link
            to="/client/dashboard"
            className={`admin-sidebar-btn ${
              location.pathname === '/client/dashboard' ? 'active' : ''
            }`}
          >
            <div className="sidebar_icon_container">
              <img
                src={location.pathname === '/client/dashboard' ? dashboard_a : dashboard}
                className="sidebar-btn-img"
              />
              <img src={dashboard_a} className="sidebar-btn-img-active" />
            </div>
            <span className="admin-sidebar-btn-ele">Dashboard</span>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/client/quests"
            className={`admin-sidebar-btn ${
              location.pathname === '/client/quests' ? 'active' : ''
            }`}
          >
            <div className="sidebar_icon_container">
              <img
                src={location.pathname === '/client/quests' ? quests_a : quests}
                className="sidebar-btn-img"
              />
              <img src={quests_a} className="sidebar-btn-img-active" />
            </div>
            <span className="admin-sidebar-btn-ele">Quests</span>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/client/analytics"
            className={`admin-sidebar-btn ${
              location.pathname === '/client/analytics' ? 'active' : ''
            }`}
          >
            <div className="sidebar_icon_container">
              <img
                src={location.pathname === '/client/analytics' ? analytics_a : analytics}
                className="sidebar-btn-img"
              />
              <img src={analytics_a} className="sidebar-btn-img-active" />
            </div>
            <span className="admin-sidebar-btn-ele">Analytics</span>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/client/journeys"
            className={`admin-sidebar-btn ${
              location.pathname.startsWith('/client/journeys') ? 'active' : ''
            }`}
          >
            <div className="sidebar_icon_container">
              <img
                src={location.pathname === '/client/journeys' ? journeys_a : journeys}
                className="sidebar-btn-img"
              />
              <img src={journeys_a} className="sidebar-btn-img-active" />
            </div>
            <span className="admin-sidebar-btn-ele">Journeys</span>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/client/settings"
            className={`admin-sidebar-btn ${
              location.pathname === '/client/settings' ? 'active' : ''
            }`}
          >
            <div className="sidebar_icon_container">
              <img
                src={location.pathname === '/client/settings' ? settings_a : settings}
                className="sidebar-btn-img"
              />
              <img src={settings_a} className="sidebar-btn-img-active" />
            </div>
            <span className="admin-sidebar-btn-ele">Settings</span>
          </Link>
        </div>
      </div>
    </>
    // <div>
    //     {/* <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
    //     </Sidebar> */}
    // </div>
  );
};

export default ClientSidebar;
