import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';

import JourneysSetup from './journeyssetup';
import JourneysTemplate from './journeystemplate';
import JourneysReward from './journeysreward';

import JourneyBreadCrumb from '../../../components/client/journeys/journeybreadcrumb';

const JourneysSetupWrapper = () => {
  const CREATE_JOURNEY_SETUP = gql`
    mutation JourneyCreateOne($input: CreateOneJourneyInput!) {
      JourneyCreateOne(record: $input) {
        recordId
      }
    }
  `;
  const UPDATE_JOURNEY_BY_ID = gql`
    mutation JourneyUpdateById($id: MongoID!, $record: UpdateByIdJourneyInput!) {
      JourneyUpdateById(_id: $id, record: $record) {
        recordId
      }
    }
  `;
  const UPDATE_JOURNEY_REWARDS_ACTIVE = gql`
    mutation JourneyUpdateById($id: MongoID!, $rewards: JSON) {
      JourneyUpdateById(_id: $id, record: { rewards: $rewards, status: ACTIVE }) {
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

  const [createJourneySetup] = useMutation(CREATE_JOURNEY_SETUP);
  const [updateQuestRewardsActive] = useMutation(UPDATE_JOURNEY_REWARDS_ACTIVE);
  const [updateJourneyById] = useMutation(UPDATE_JOURNEY_BY_ID);

  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const journeyId = queryParams.get('journeyId');
  const defaultFlag = queryParams.get('defaultFlag');
  const breadcrumbItems = [{ label: 'Journey templates' }, { label: 'Basic journey setup' }];
  const [journey, setJourney] = useState({
    _id: journeyId,
    title: 'Custom',
    image: null,
    description: '',
    startDate: null,
    quests: [],
    rewards: {},
  });

  const [flag, setFlag] = useState(defaultFlag ? parseInt(defaultFlag) : 1);
  const handleShow1 = () => setFlag(1);
  const handleShow2 = () => setFlag(2);
  const handleShow3 = () => setFlag(3);

  const routeToJourney = () => {
    navigate(`/client/journeys`);
  };

  const onStartQuest = (rewards) => {
    updateQuestRewardsActive({
      variables: {
        id: journey._id,
        rewards: rewards,
      },
    })
      .then((result) => {
        console.log(result);
        // route to journey
        routeToJourney();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showComponent = () => {
    switch (flag) {
      case 1:
        return <JourneysSetup setTab={setFlag} journey={journey} onSetupJourney={onSetupJourney} />;
      case 2:
        return <JourneysTemplate setTab={setFlag} journey={journey} />;
      case 3:
        return <JourneysReward setTab={setFlag} journey={journey} onStartQuest={onStartQuest} />;
    }
  };

  const parseDate = (dateString) => {
    const dateParts = dateString.split('-');

    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Months in JavaScript are 0-indexed
      const year = parseInt(dateParts[2]);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      }
    }
    return null;
  };

  const onSetupJourney = (journeyEntity) => {
    journeyEntity = {
      ...journeyEntity,
      project: '64da2386f5155b22f31d6df4',
      startDate: new Date(journeyEntity.startDate),
      status: 'DRAFT',
    };
    if (!journey._id || journey._id === '0') {
      delete journey._id;
      createJourneySetup({
        variables: {
          input: journeyEntity,
        },
      })
        .then((result) => {
          setJourney({
            ...journey,
            ...journeyEntity,
            _id: result.data.JourneyCreateOne.recordId,
            quests: [],
          });
          setFlag(2);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const updatedJourney = {
        ...journey,
        ...journeyEntity,
      };
      delete updatedJourney.__typename;
      delete updatedJourney._id;
      console.log('updatedJourney ====> ', updatedJourney);
      updateJourneyById({
        variables: {
          id: journey._id,
          record: updatedJourney,
        },
      })
        .then((result) => {
          setJourney({
            ...journey,
            ...journeyEntity,
          });
          setFlag(2);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const { loading, error, data } = useQuery(GET_JOURNEY_BY_ID, {
    variables: { id: journeyId },
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (data) {
      console.log('journey ====> ', data.JourneyById);
      setJourney(data.JourneyById);
    }
  }, [data]);

  return (
    <>
      <div>
        <div className="admin-journeys-preview-header">
          <div className="admin-journeys-header-breadcrumb">
            <JourneyBreadCrumb model={breadcrumbItems} />
          </div>
          <div className="admin-journeys-header-title">
            <h3>{`${journey.title} journey setup`}</h3>
          </div>
        </div>
        <div className="flex justify-content-between flex-wrap admin-quest-memus-preview">
          <div className="flex flex-row flex-wrap ">
            <div className="flex flex-row justify-content-between admin-quest-menus">
              <Link
                to="#"
                onClick={(e) => {
                  handleShow1();
                  e.preventDefault();
                }}
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 1 ? 'active' : ''
                }`}>
                1. Set up
              </Link>
              <Link
                to="#"
                onClick={(e) => {
                  if (journey._id === '0' || !journey._id) {
                    e.preventDefault();
                  } else {
                    handleShow2();
                    e.preventDefault();
                  }
                }}
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 2 ? 'active' : ''
                } ${journey._id === '0' || !journey._id ? 'disabled-link' : ''}`}>
                2. Templates
              </Link>
            </div>
            <div className="flex flex-row justify-content-between admin-quest-menus">
              <Link
                to="#"
                onClick={(e) => {
                  if (journey._id === '0' || !journey._id) {
                    e.preventDefault();
                  } else {
                    handleShow3();
                    e.preventDefault();
                  }
                }}
                className={`flex align-items-center justify-content-center admin-quest-menuitem ${
                  flag === 3 ? 'active' : ''
                } ${journey._id === '0' || !journey._id ? 'disabled-link' : ''}`}>
                3. Reward
              </Link>
            </div>
          </div>
          {flag === 2 ? <div className="admin-quest-preview-btn">Preview Journey</div> : <></>}
        </div>
      </div>
      {showComponent()}
    </>
  );
};

export default JourneysSetupWrapper;
