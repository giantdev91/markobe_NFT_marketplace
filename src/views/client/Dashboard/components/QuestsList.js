import { QUEST_STATUS } from '../../../../types';
import drag_drop from '../../../../assets/img/drag_drop.svg';
import info from '../../../../assets/img/info.svg';
import { gql, useQuery } from '@apollo/client';

import React, { useState, useEffect } from 'react';

const QuestItem = ({ title, index, status }) => {
  const colors = ['#833CFC', '#FF8E26', '#E859B9', '#1BC28C'];
  const colorIndex = index ? parseInt(index) % colors.length : 0;
  const color = colors[colorIndex];

  const styles = {
    [QUEST_STATUS.DRAFTS]: { id: 'stripes', background: 'rgba(0, 0, 0, 0.05);' },
    [QUEST_STATUS.ACTIVE]: {
      borderColor: color,
      background: '#fff',
    },
    [QUEST_STATUS.COMPLETED]: {
      background: 'rgba(0, 0, 0, 0.05);',
      borderColor: '0.2px solid rgba(20, 20, 20, 0.2)',
    },
    [QUEST_STATUS.EXPIRED]: { background: '#fff' },
  };

  const { id, background, borderColor } = styles[status];

  return (
    <div
      id={id}
      className={'flex flex-row justify-content-between py-2 px-2 mt-2'}
      style={{
        borderRadius: 8,
        alignItems: 'center',
        background,
        borderStyle: 'solid',
        borderWidth: borderColor ? '0.2px' : 0,
        borderColor,
      }}
    >
      <div style={{ alignItems: 'center' }} className={'flex flex-row items-center'}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img width={15} height={15} alt={'info'} src={drag_drop} />
        </div>
        <div className={'flex flex-column mx-2'}>
          <div>
            <span style={{ fontSize: 14, color: '#141414' }}>{title}</span>
          </div>
          <span style={{ fontSize: 12, color: '##000000' }}>{title}</span>
        </div>
      </div>
      <div>
        {status !== QUEST_STATUS.EXPIRED && (
          <div style={{ borderColor: color }} className={'donut'} />
        )}
      </div>
    </div>
  );
};
const QuestsList = ({ status, height }) => {
  const [quests, setQuests] = useState([]);

  const QUEST_QUERY = gql`
    query QuestMany {
      QuestMany {
        title
        _id
        status
      }
    }
  `;

  const { loading, error, data } = useQuery(QUEST_QUERY);

  useEffect(() => {
    if (data && data.QuestMany) {
      setQuests(data.QuestMany);
    }
  }, [data]);

  return (
    <div className={'quest-container mx-2 mb-4 justify-content-between'} style={{ height }}>
      <div className={'flex flex-row justify-content-between px-3 py-3 align-items-center'}>
        <div className={'flex flex-row'}>
          <span style={{ fontSize: 18, fontWeight: 500 }}>{status || 'Quests'}</span>
          <span style={{ marginLeft: 8, fontSize: 16, color: 'rgba(20, 20, 20, 0.3)' }}>
            {' '}
            {quests.length}{' '}
          </span>
        </div>
        <div>
          <img width={15} height={15} alt={'info'} src={info} />
        </div>
      </div>
      <div className={'px-3 py-1 flex flex-column'} style={{ overflow: 'auto' }}>
        {quests.map((quest, index) => {
          if (quest.status === status) {
            return (
              <QuestItem
                status={quest.status}
                key={index}
                index={String(index)}
                title={quest.title}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default QuestsList;
