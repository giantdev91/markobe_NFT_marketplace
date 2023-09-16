import React from 'react';
import { InputText } from 'primereact/inputtext';

const InputBox = ({ title, comment }) => {
  return (
    <div className="ipt-box">
      <div className="label-row">
        <label htmlFor="title1" className="subtitle">
          {title}
        </label>
      </div>
      <InputText
        id="title1"
        aria-describedby="username1-help"
        className="ipt-txt"
        placeholder={comment}
      />
    </div>
  );
};
export default InputBox;
