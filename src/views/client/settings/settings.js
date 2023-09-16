import React, { useCallback, useState, useEffect } from 'react';
import cuid from 'cuid';
import Dropzone2 from '../../../components/client/dropzone2';
import TwitterIcon from '../../../assets/img/twitter.svg';
import DiscordIcon from '../../../assets/img/discord.svg';
import TelegramIcon from '../../../assets/img/telegram.svg';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const Settings = () => {
  const [projectName, setProjectName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [twitter, setTwitter] = useState('');
  const [discord, setDiscord] = useState('');
  const [telegram, setTelegram] = useState('');
  const [images, setImages] = useState([]);
  const [chains, setChains] = useState(['Matic', 'NFT']);
  const [categories, setCategories] = useState(['DeFi', 'NFT']);

  const onDrop = useCallback((acceptedFiles) => {
    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImages((prevState) => [...prevState, { id: cuid(), src: e.target.result }]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const deleteImg = () => {
    setImages([]);
  };

  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([
      {
        id: 1,
        avatar: process.env.PUBLIC_URL + '/assets/img/avatar/1.png',
        name: 'Devon Lane',
        wallet: '0xce90a7949bb78892f159f428d0dc23a8e3584d75',
        role: 'Admin',
      },
    ]);
  }, []);

  const actionTemplate = (rowData, options) => {
    return (
      <>
        <Button type="button" icon="pi pi-times" size="small" />
        <Button type="button" icon="pi pi-pencil" size="small" />
      </>
    );
  };

  const nameTemplate = (rowData, options) => {
    return (
      <>
        <div className="name-td">
          {rowData.avatar != '' && <img src={rowData.avatar} />}
          <span>{rowData.name}</span>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="admin-setting-header">
        <div className="admin-setting-title">
          <h3>Settings</h3>
        </div>
        <div className="admin-setting-logo">
          {images.length == 0 ? (
            <div className="logo-div"></div>
          ) : (
            <img src={images[0].src} className="logo-img" />
          )}
          <div className="admin-setting-project-name">
            <h3>{projectName == '' ? 'Project name' : projectName}</h3>
            <p>{website == '' ? 'project website' : website}</p>
          </div>
        </div>
      </div>

      <div className="admin-setting-content">
        <div className="admin-setting-content-left">
          <div className="admin-setting-block">
            <div className="admin-setting-block-title">
              <h3>Block title</h3>
            </div>
            <div className="block-input">
              <label>Community name</label>
              <input
                value={projectName}
                placeholder="Marko"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="block-input">
              <label>Subdomain</label>
              <input
                value={subdomain}
                placeholder="marko.com/vitalik"
                onChange={(e) => setSubdomain(e.target.value)}
              />
            </div>
            <div className="block-input">
              <label>Website link</label>
              <input
                value={website}
                placeholder="URL"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="block-input">
              <label>Community description</label>
              <input
                value={description}
                placeholder="URL"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="admin-setting-block">
            <div className="admin-setting-block-title">
              <h3>Social</h3>
            </div>
            <div className="block-input">
              <label>
                <img src={TwitterIcon} />
                <span>Twitter</span>
              </label>
              <input
                value={twitter}
                placeholder="URL"
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
            <div className="block-input">
              <label>
                <img src={DiscordIcon} />
                <span>Discord</span>
              </label>
              <input
                value={discord}
                placeholder="URL"
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
            <div className="block-input">
              <label>
                <img src={TelegramIcon} />
                <span>Telegram</span>
              </label>
              <input
                value={telegram}
                placeholder="URL"
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
            <div className="block-input">
              <a>Add more</a>
            </div>
          </div>
          <div className="admin-setting-block">
            <div className="admin-setting-block-title">
              <h3>Chains</h3>
            </div>
            <div className="tag-container">
              {chains.map((chain, index) => (
                <div key={index} className="tag-button">
                  <span>{chain}</span>
                  <span className="pi pi-times"></span>
                </div>
              ))}
              <button>Add</button>
            </div>
          </div>
          <div className="admin-setting-block">
            <div className="admin-setting-block-title">
              <h3>Category</h3>
            </div>
            <div className="tag-container">
              {categories.map((category, index) => (
                <div key={index} className="tag-button">
                  <span>{category}</span>
                  <span className="pi pi-times"></span>
                </div>
              ))}
              <button>Add</button>
            </div>
          </div>
        </div>
        <div className="admin-setting-content-right">
          <div className="admin-setting-content-upload">
            <div className="admin-setup-title">
              <h3>Add picture</h3>
            </div>
            {images.length > 0 ? (
              <Dropzone2
                onDrop={onDrop}
                accept={'image/*'}
                isEmpty={false}
                img={images[0]}
                deleteImg={deleteImg}
              />
            ) : (
              <Dropzone2
                onDrop={onDrop}
                accept={'image/*'}
                isEmpty={true}
                img={null}
                deleteImg={deleteImg}
              />
            )}
          </div>
        </div>
      </div>
      <div className="admin-setting-member-table">
        <div className="admin-setting-member-table-header">
          <h3>Team members</h3>
          <button>Add member</button>
        </div>
        <div className="admin-setting-member-table-content">
          <DataTable
            value={members}
            scrollable
            scrollHeight="400px"
            tableStyle={{ minWidth: '50rem' }}
          >
            <Column body={nameTemplate} header="Name"></Column>
            <Column field="wallet" header="Wallet"></Column>
            <Column field="role" header="Role"></Column>
            <Column style={{ flex: '0 0 4rem' }} body={actionTemplate} header="Action"></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default Settings;
