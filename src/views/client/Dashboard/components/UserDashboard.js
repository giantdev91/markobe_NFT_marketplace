import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

const UserDashboard = () => {
  const products = [
    {
      image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      name: 'Льо ШаПі Здун',
      wallet: 'mh64giFHjse7qaBiKDAjXr51FDi7cuHbb7',
      discord: 'discord_user',
      twitter: 'twitter_user',
      country: 'Israel',
      nfts: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      ],
    },
    {
      image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      name: 'User 2',
      wallet: 'mh64giFHjse7qaBiKDAjXr51FDi7cuHbb7',
      discord: 'discord_user',
      twitter: 'twitter_user',
      country: 'ТРО Варшави',
      nfts: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      ],
    },
    {
      image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      name: 'User 3',
      wallet: 'mh64giFHjse7qaBiKDAjXr51FDi7cuHbb7',
      discord: 'discord_user',
      twitter: 'twitter_user',
      country: 'Батальйон Монако',
      nfts: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      ],
    },
    {
      image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      name: 'User 4',
      wallet: 'mh64giFHjse7qaBiKDAjXr51FDi7cuHbb7',
      discord: 'discord_user',
      twitter: 'twitter_user',
      country: 'Лондонський десант',
      nfts: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      ],
    },
  ];

  const userName = (user) => {
    return (
      <div className="flex flex-row align-items-center gap-2">
        <Avatar style={{ minWidth: '30px' }} image={user.image} shape="circle" size="normal" />
        <span className="p-column-title">{user.name}</span>
      </div>
    );
  };

  const NFTs = (user) => {
    return (
      <AvatarGroup>
        {user.nfts.map(
          (nft, index) => (
            <>
              {index < 2 && <Avatar imageAlt={user.nft} image={nft} shape="circle" size="normal" />}
              {user.nfts.length > 3 && index === 2 && (
                <Avatar
                  label={`+${user.nfts.length - 2}`}
                  shape="circle"
                  size="normal"
                  style={{ backgroundColor: '#FFF', color: '#141414' }}
                />
              )}
            </>
          ),
          [],
        )}
      </AvatarGroup>
    );
  };

  const wallet = (user) => {
    return <span style={{ color: '#667085', fontSize: 14 }}> {truncate(user.wallet, 12)}</span>;
  };

  const country = (user) => {
    return (
      <span
        style={{
          color: '#667085',
          fontSize: 14,
        }}
      >
        {' '}
        {user.country.length > 8 ? user.country.substring(0, 8) + '...' : user.country}
      </span>
    );
  };

  const truncate = (fullStr, strLen, separator) => {
    if (fullStr.length <= strLen) return fullStr;
    separator = separator || '...';
    const sepLen = separator.length;
    const charsToShow = strLen - sepLen;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
  };

  return (
    <div className={'card'}>
      <DataTable value={products} paginator rows={10} responsiveLayout="scroll">
        <Column
          body={userName}
          headerStyle={{
            background: '#F3F5F7',
            color: '#141414',
            fontSize: 14,
            borderTopLeftRadius: 8,
          }}
          bodyStyle={{ background: '#F3F5F7', color: '#667085', fontSize: 16 }}
          header="Name"
        />
        <Column
          body={NFTs}
          headerStyle={{ background: '#F3F5F7', color: '#141414', fontSize: 14 }}
          bodyStyle={{ background: '#F3F5F7', color: '#667085', fontSize: 16 }}
          field="name"
          header="NFT"
        />
        <Column
          headerStyle={{ background: '#F3F5F7', color: '#141414', fontSize: 14 }}
          bodyStyle={{ background: '#F3F5F7', color: '#667085', fontSize: 16 }}
          field="discord"
          header="Discord"
        />
        <Column
          headerStyle={{ background: '#F3F5F7', color: '#141414', fontSize: 14 }}
          bodyStyle={{ background: '#F3F5F7', color: '#667085', fontSize: 16 }}
          field="twitter"
          header="Twitter"
        />
        <Column
          headerStyle={{ background: '#F3F5F7', color: '#141414', fontSize: 14 }}
          bodyStyle={{ background: '#F3F5F7', color: '#667085', fontSize: 16 }}
          body={country}
          header="Country"
        />
        <Column
          bodyStyle={{ background: '#F3F5F7' }}
          headerStyle={{ background: '#F3F5F7', borderTopRightRadius: 8 }}
          body={wallet}
          header="Wallet"
        />
      </DataTable>
    </div>
  );
};

export default UserDashboard;
