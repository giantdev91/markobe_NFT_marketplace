import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';

import QuestSetup from '../../../../views/client/journeys/questTemplate/journeyquestsetup.js';
import QuestEntries from '../../../views/../client/journeys/questTemplate/journeyquestentries.js';
import QuestEligibility from '../../../../views/client/journeys/questTemplate/journeyquesteligibility.js';
import QuestReward from '../../../views/../client/journeys/questTemplate/journeyquestreward.js';

const JourneyQuests = () => {
  const CREATE_QUEST_SETUP = gql`
    mutation QuestCreateOne($input: CreateOneQuestInput!) {
      QuestCreateOne(record: $input) {
        recordId
      }
    }
  `;

  const UPDATE_QUEST_TASKS = gql`
    mutation QuestUpdateById($id: MongoID!, $tasks: [JSON]) {
      QuestUpdateById(_id: $id, record: { tasks: $tasks }) {
        recordId
      }
    }
  `;

  const UPDATE_QUEST_Eligibility = gql`
    mutation QuestUpdateById($id: MongoID!, $eligibility: JSON) {
      QuestUpdateById(_id: $id, record: { eligibility: $eligibility }) {
        recordId
      }
    }
  `;

  const UPDATE_QUEST_REWARDS_ACTIVE = gql`
    mutation QuestUpdateById($id: MongoID!, $rewards: JSON) {
      QuestUpdateById(_id: $id, record: { rewards: $rewards, status: ACTIVE }) {
        recordId
      }
    }
  `;

  const GET_JOURNEY_BY_ID = gql`
    query JourneyById($id: MongoID!) {
      JourneyById(_id: $id) {
        title
        image
        description
        startDate
        project
        rewards
        quests
        status
        _id
      }
    }
  `;

  const UPDATE_JOURNEY_QUESTS_BY_ID = gql`
    mutation JourneyUpdateById($id: MongoID!, $quests: [JSON]) {
      JourneyUpdateById(_id: $id, record: { quests: $quests }) {
        recordId
      }
    }
  `;
  const navigate = useNavigate();

  const [createQuestSetup] = useMutation(CREATE_QUEST_SETUP);
  const [updateQuestTasks] = useMutation(UPDATE_QUEST_TASKS);
  const [updateQuestEligibility] = useMutation(UPDATE_QUEST_Eligibility);
  const [updateQuestRewardsActive] = useMutation(UPDATE_QUEST_REWARDS_ACTIVE);
  const [updateJourneyQuestsById] = useMutation(UPDATE_JOURNEY_QUESTS_BY_ID);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const journeyId = queryParams.get('journeyId');
  const [journey, setJourney] = useState({});

  const [flag, setFlag] = useState(1);
  const [quest, setQuest] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
    project: {},
    eligibility: {},
    tasks: [],
    rewards: [],
  });

  const handleShow1 = () => setFlag(1);
  const handleShow2 = () => setFlag(2);
  const handleShow3 = () => setFlag(3);
  const handleShow4 = () => setFlag(4);

  const parseDate = (dateString) => {
    const dateParts = dateString.split('-');

    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Months in JavaScript are 0-indexed
      const year = parseInt(dateParts[2]);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }
    return null;
  };

  // setup quest save the setup information to the db and retrieve the record Id
  const onQuestSetup = (questSetup) => {
    questSetup = {
      ...questSetup,
      project: '64da2386f5155b22f31d6df4',
      startDate: parseDate(questSetup.startDate),
      endDate: parseDate(questSetup.endDate),
      status: 'DRAFT',
    };
    updateJourneyQuestsById({
      variables: {
        id: journeyId,
        quests: [
          ...journey.quests,
          {
            ...quest,
            ...questSetup,
          },
        ],
      },
    })
      .then((result) => {
        setJourney((prev) => ({
          ...prev,
          quests: [
            ...prev.quests,
            {
              ...quest,
              ...questSetup,
            },
          ],
        }));
        setQuest({
          ...quest,
          ...questSetup,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // save the entries of the quest to the db and retrieve the record Id
  const onQuestEntriesAdd = (questEntry) => {
    const existingTaskIndex = quest.tasks.findIndex(
      (task) => task.taskName === questEntry.taskName,
    );

    if (existingTaskIndex !== -1) {
      // Task with the same taskName exists, update it
      const updatedTasks = quest.tasks.map((task, index) =>
        index === existingTaskIndex ? questEntry : task,
      );

      setQuest({
        ...quest,
        tasks: updatedTasks,
      });
    } else {
      // Task with taskName doesn't exist, add it
      setQuest({
        ...quest,
        tasks: [...quest.tasks, questEntry],
      });
    }
  };

  const onQuestEntriesSave = () => {
    const updatedQuests = journey.quests.map((entity, index) =>
      index === journey.quests.length - 1 ? quest : entity,
    );
    updateJourneyQuestsById({
      variables: {
        id: journeyId,
        quests: updatedQuests,
      },
    })
      .then((result) => {
        setJourney((prev) => ({
          ...prev,
          quests: updatedQuests,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onQuestEligibilitySave = (eligibility) => {
    console.log('eligibility ===> ', eligibility);
    const updatedQuest = {
      ...quest,
      eligibility: eligibility,
    };
    const updatedQuests = journey.quests.map((entity, index) =>
      index === journey.quests.length - 1 ? updatedQuest : entity,
    );

    updateJourneyQuestsById({
      variables: {
        id: journeyId,
        quests: updatedQuests,
      },
    })
      .then((result) => {
        setQuest(updatedQuest);
        setJourney((prev) => ({
          ...prev,
          quests: updatedQuests,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delete when the user delete the activities on the template
  const onQuestEntriesDelete = (deletedTaskName) => {
    console.log(quest);
    if (quest.tasks.length > 0) {
      setQuest((prevQuest) => ({
        ...prevQuest,
        tasks: prevQuest.tasks.filter((task) => task.taskName !== deletedTaskName),
      }));
    }
  };

  const onStartQuest = (rewards) => {
    const updatedQuest = {
      ...quest,
      rewards: rewards,
    };
    const updatedQuests = journey.quests.map((entity, index) =>
      index === journey.quests.length - 1 ? updatedQuest : entity,
    );

    updateJourneyQuestsById({
      variables: {
        id: journeyId,
        quests: updatedQuests,
      },
    })
      .then((result) => {
        setQuest(updatedQuest);
        setJourney((prev) => ({
          ...prev,
          quests: updatedQuests,
        }));
        // route to journey template
        routeToJourneyQuestTemplate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const routeToJourneyQuestTemplate = () => {
    navigate(`/client/journeys/setup?journeyId=${journeyId}&defaultFlag=2`);
  };

  const showComponent = () => {
    switch (flag) {
      case 1:
        return <QuestSetup setTab={setFlag} quest={quest} onQuestSetup={onQuestSetup} />;
      case 2:
        return (
          <QuestEntries
            setTab={setFlag}
            onQuestEntriesAdd={onQuestEntriesAdd}
            onQuestEntriesDelete={onQuestEntriesDelete}
            onQuestEntriesSave={onQuestEntriesSave}
          />
        );
      case 3:
        return (
          <QuestEligibility setTab={setFlag} onQuestEligibilitySave={onQuestEligibilitySave} />
        );
      case 4:
        return <QuestReward setTab={setFlag} onStartQuest={onStartQuest} />;
    }
  };

  const { loading, error, data } = useQuery(
    GET_JOURNEY_BY_ID,
    {
      variables: { id: journeyId },
    },
    {
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    if (data) {
      console.log('journey data =================> ', data.JourneyById);
      setJourney(data.JourneyById);
    }
  }, [data]);

  return (
    <>
      <div>
        <p className="admin-quest-title">Create quests</p>
        <div className="flex justify-content-between flex-wrap admin-quest-memus-preview">
          <div className="flex flex-row flex-wrap ">
            <div className="flex flex-row justify-content-between admin-quest-menus">
              <Link
                to="#"
                onClick={handleShow1}
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 1 ? 'active' : ''
                }`}>
                1. Set up
              </Link>
              <Link
                to="#"
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 2 ? 'active' : ''
                } ${quest.id === '0' ? 'disabled-link' : ''}`}
                onClick={(e) => {
                  if (quest.id === '0') {
                    e.preventDefault();
                  } else {
                    handleShow2();
                  }
                }}>
                2. Entries
              </Link>
            </div>
            <div className="flex flex-row justify-content-between admin-quest-menus">
              <Link
                to="#"
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 3 ? 'active' : ''
                } ${quest.id === '0' ? 'disabled-link' : ''}`}
                onClick={(e) => {
                  if (quest.id === '0') {
                    e.preventDefault();
                  } else {
                    handleShow3();
                  }
                }}>
                3. Eligibility
              </Link>
              <Link
                to="#"
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 4 ? 'active' : ''
                } ${quest.id === '0' ? 'disabled-link' : ''}`}
                onClick={(e) => {
                  if (quest.id === '0') {
                    e.preventDefault();
                  } else {
                    handleShow4();
                  }
                }}>
                4. Reward
              </Link>
            </div>
          </div>
          {flag !== 1 ? <div className="admin-quest-preview-btn">Preview Request</div> : <></>}
        </div>
      </div>
      {showComponent()}
    </>
  );
};

export default JourneyQuests;
