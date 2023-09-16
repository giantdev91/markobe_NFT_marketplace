import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Partials
import AdminSidebar from '../../components/partials/client/admin-sidebar';
import AdminNavbar from '../../components/partials/client/admin-navbar';
import AdminQuestMenubar from '../../components/partials/client/admin-quest-menubar';
import AdminSubrouter from '../../router/admin-subrouter';

import QuestSetup from '../../views/client/quests/questsetup.js';
import QuestEntries from '../../views/client/quests/questentries.js';
import QuestEligibility from '../../views/client/quests/questeligibility.js';
import QuestReward from '../../views/client/quests/questreward.js';

const ClientLayout = () => {
  const [flag, setFlag] = useState(1);
  const handleShow1 = () => setFlag(1);
  const handleShow2 = () => setFlag(2);
  const handleShow3 = () => setFlag(3);
  const handleShow4 = () => setFlag(4);

  const showComponent = () => {
    switch (flag) {
      case 1:
        return <QuestSetup />;
      case 2:
        return <QuestEntries />;
      case 3:
        return <QuestEligibility />;
      case 4:
        return <QuestReward />;
    }
  };

  return (
    <>
      <div className="admin-layout-h">
        <AdminSidebar />
        <div>
          <AdminNavbar />
          <div className="content-page" id="content-page">
            <div>
              <p className="admin-quest-title">Create quests</p>
              <div className="admin-quest-memus-preview">
                <div className="admin-quest-menus">
                  <Link to="#" onClick={handleShow1} className="admin-quest-menuitem">
                    1. Set up
                  </Link>
                  <Link to="#" onClick={handleShow2} className="admin-quest-menuitem">
                    2. Entries
                  </Link>
                  <Link to="#" onClick={handleShow3} className="admin-quest-menuitem">
                    3. Eligibility
                  </Link>
                  <Link to="#" onClick={handleShow4} className="admin-quest-menuitem">
                    4. Reward
                  </Link>
                </div>
                <div className="admin-quest-preview-btn">Preview Request</div>
              </div>
            </div>
            {showComponent()}
          </div>
          <AdminSubRouter />
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
