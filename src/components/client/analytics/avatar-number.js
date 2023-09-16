import React from 'react';
import Empty_Icon from '../../../assets/img/nfts/empty.svg';

const AvatarNumber = ({ number }) => {
  return (
    <div style={{ position: 'relative', display: 'inline' }}>
      <img src={Empty_Icon} style={{ display: 'inline' }} />
      <div
        style={{
          marginTop: '-50%',
          fontSize: '12px',
          fontWeight: '400',
          color: '#141414B3',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '99',
        }}
      >
        +{number}
      </div>
    </div>
  );
};

export default AvatarNumber;
