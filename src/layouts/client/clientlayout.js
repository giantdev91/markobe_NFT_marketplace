// import { Card } from 'primereact/card';
import React from 'react';
import ClientSidebar from '../../components/client/sidebar';
import ClientNavbar from '../../components/client/nav';
import '../../assets/css/client.scss';
import '../../assets/css/client-responsive.scss';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Quests from '../../views/client/quests/quests.js';
import Analytics from '../../views/client/analytics/analytics.js';
import Journeys from '../../views/client/journeys/journeys.js';
import JourneysPreview from '../../views/client/journeys/journeyspreview.js';
import JourneysSetupWrapper from '../../views/client/journeys/journeyssetupwrapper.js';
import JourneyQuests from '../../views/client/journeys/questTemplate/journeyquests.js';
import Settings from '../../views/client/settings/settings.js';
import Dashboard from '../../views/client/Dashboard/Dashboard';
import Archive from '../../views/client/Dashboard/Archive';

const ClientLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <>
      <div>
        <ClientNavbar />
        <ClientSidebar visible={sidebarShow} />
        <div className="layout-content">
          <div className="client-content-page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/client/dashboard" element={<Dashboard />} />
              <Route path="/client/dashboard/archive" element={<Archive />} />
              <Route path="/client/quests" element={<Quests />} />
              <Route path="/client/analytics" element={<Analytics />} />
              <Route path="/client/journeys" element={<Journeys />} />
              <Route path="/client/journeys/preview" element={<JourneysPreview />} />
              <Route path="/client/journeys/setup" element={<JourneysSetupWrapper />} />
              <Route path="/client/journeys/quest/setup" element={<JourneyQuests />} />
              <Route path="/client/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
