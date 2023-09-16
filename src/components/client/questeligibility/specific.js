import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import Info_Icon from '../../../assets/img/info.svg';

const Specific = ({ onAction }) => {
  const [count, setCount] = useState(0);
  const [specific, setSpecific] = useState({
    roleID: '',
    discordID: '',
    contents: [],
  });

  const showInputs = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <div className="ipt-box">
          <div className="subtitle">
            <label htmlFor={`title${i + 2}`} className="subtitle">
              Add
              <img src={Info_Icon} className="info-icon" />
            </label>
          </div>
          <InputText
            id={`title${i + 2}`}
            aria-describedby="username1-help"
            className="block"
            onChange={(e) => onChangeContent(i, e.target.value)}
          />
        </div>,
      );
    }
    return inputs;
  };

  const onChangeContent = (index, value) => {
    setSpecific((prevSpecific) => {
      const newContents = [...prevSpecific.contents];

      while (newContents.length <= index) {
        newContents.push('');
      }

      newContents[index] = value;

      return { ...prevSpecific, contents: newContents };
    });
  };

  const onChangeRoleID = (value) => {
    setSpecific({
      ...specific,
      roleID: value,
    });
  };

  const onChangeDiscordID = (value) => {
    setSpecific({
      ...specific,
      discordID: value,
    });
  };

  useEffect(() => {
    onAction(specific);
  }, [specific]);

  return (
    <Card className="elegibility-card elegibility-card-specific">
      <p className="title">Role</p>
      <div className="field">
        <div className="subtitle">
          <label htmlFor="title1" className="block">
            Role ID
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="block"
          onChange={(e) => onChangeRoleID(e.target.value)}
        />
      </div>
      <div className="field">
        <div className="subtitle">
          <label htmlFor="title2" className="block">
            Discord ID
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title2"
          aria-describedby="username1-help"
          className="block"
          onChange={(e) => onChangeDiscordID(e.target.value)}
        />
      </div>
      {showInputs()}
      <a href="#" onClick={() => setCount(count + 1)} className="add_more">
        Add more
      </a>
    </Card>
  );
};

export default Specific;
