import React from 'react';
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useState, useEffect } from 'react';
import QuestionAnswer from './educational-question';

const EducationalQuestionAnswer = ({ closeActivity, onAction }) => {
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);

  const onCloseQuestion = () => {
    setCount(count - 1);
  };

  const onChangeQuestion = (order, data) => {
    const updatedQuestions = [...questions];
    const questionIndex = order - 1;

    if (questionIndex >= 0 && questionIndex < updatedQuestions.length) {
      updatedQuestions[questionIndex] = data;
      setQuestions(updatedQuestions);
    }
  };

  useEffect(() => {
    setQuestions([]);
    const newQuestionArray = [];
    for (let i = 0; i < count; i++) {
      newQuestionArray.push({});
    }
    setQuestions(newQuestionArray);
  }, [count]);

  useEffect(() => {
    onAction(questions);
  }, [questions]);

  const addOrRemoveQuestions = (tempCount) => {
    setCount(tempCount);
  };

  return (
    <>
      <div className="activity-item">
        <div className="close-btn">
          <img
            src={Close_Icon}
            className="close-btn"
            onClick={() => closeActivity('EducationalQuestionAnswer')}
          />
        </div>
        <div
          className={`flex flex-row align-items-center justify-content-between ${
            active ? 'mb-4' : ''
          }`}
          onClick={() => setActive(!active)}
        >
          <span> Setup questions and choose the correct answer</span>
          {active ? (
            <img src={Active_Icon} className="info-img" />
          ) : (
            <img src={Inactive_Icon} className="info-img" />
          )}
        </div>
        {active ? (
          <>
            <div className="ipt-box">
              <div className="label-row">
                <label htmlFor="title1" className="title">
                  Number of questions
                </label>
              </div>
              <InputText
                id="title1"
                aria-describedby="username1-help"
                className="ipt-txt"
                value={count}
                onChange={(e) => addOrRemoveQuestions(e.target.value)}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {active ? (
        <>
          {Array.from({ length: count }, (_, index) => (
            <QuestionAnswer
              key={index}
              order={index + 1}
              closeQuestion={onCloseQuestion}
              onChangeQuestion={onChangeQuestion}
            /> // Assuming order starts from 1
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EducationalQuestionAnswer;
