import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './user.scss';

import UserHeader from './userHeader';
import Home from './userHome';
import QuestPage from './userQuestPage';
import ExplorePage from './userExplorePage';
import CommunityPage from './userCommunityPage';
import JourneyPage from './userJourneyPage';
import WorkspacePage from './userWorkspacePage';

const UserLayout = () => {
  return (
    <div className="app-container">
      <UserHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/myworkspace" element={<WorkspacePage />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
