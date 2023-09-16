import React from 'react';
import { InputText } from 'primereact/inputtext';
import Close_Icon from '../../../assets/img/buttons/close.svg';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { useEffect, useState } from 'react';
import InputBox from '../inputbox';

const SurveyAnswer = ({ order, closeQuestion, onChangeQuestion }) => {
  const [count, setCount] = useState(0);
  const [correctIndices, setCorrectIndices] = useState([]);
  const [question, setQuestion] = useState({
    questionText: '',
    answers: [
      {
        index: 1,
        answer: '',
      },
      {
        index: 2,
        answer: '',
      },
    ],
    correctIndices: [],
  });

  const showInputs = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <InputBox
          key={inputs.length + 1}
          title={'Option ' + (3 + i)}
          comment="Enter answer"
          onChange={(e) => onChangeAnswer(3 + i, e.target.value)}
        />,
      );
    }
    return inputs;
  };

  const addOrRemoveCorrectAnswers = (index) => {
    if (correctIndices.includes(index)) {
      // If index exists in correctIndices, remove it
      const updatedIndices = correctIndices.filter((i) => i !== index);
      setCorrectIndices(updatedIndices);
    } else {
      // If index doesn't exist in correctIndices, add it
      setCorrectIndices([...correctIndices, index]);
    }

    if (question.correctIndices.includes(index)) {
      // If index exists in correctIndices, remove it
      const updatedCorrectIndices = question.correctIndices.filter((i) => i !== index);
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        correctIndices: updatedCorrectIndices,
      }));
    } else {
      // If index doesn't exist in correctIndices, add it
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        correctIndices: [...prevQuestion.correctIndices, index],
      }));
    }
  };

  const showOptions = () => {
    const btns = [];
    for (let i = 0; i < count; i++) {
      btns.push(
        <div
          key={3 + i}
          className={`flex align-items-center justify-content-center option-btn ${
            correctIndices.indexOf(3 + i) > 0 ? 'active' : ''
          }`}
          onClick={() => addOrRemoveCorrectAnswers(3 + i)}
        >
          Option {3 + i}
        </div>,
      );
    }
    return btns;
  };

  const onChangeQuestionText = (text) => {
    setQuestion({
      ...question,
      questionText: text,
    });
  };

  const onChangeAnswer = (index, answer) => {
    // Find the answer object with the provided index
    const updatedAnswers = question.answers.map((item) =>
      item.index === index ? { ...item, answer } : item,
    );

    // Update the answer in the question state
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      answers: updatedAnswers,
    }));
  };

  const onAddAnswer = () => {
    setCount(count + 1);
    const newIndex = question.answers.length + 1;
    const newAnswer = {
      index: newIndex,
      answer: '',
    };

    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      answers: [...prevQuestion.answers, newAnswer],
    }));
  };

  useEffect(() => {
    onChangeQuestion(order, question);
  }, [question]);

  return (
    <div className="activity-item">
      <div className="close-btn">
        <img src={Close_Icon} className="close-btn-in" onClick={() => closeQuestion()} />
      </div>
      <div className="flex flex-row align-items-center justify-content-between mb-4">
        <span className="title-bold"> Survey {order}</span>
      </div>

      <div className="ipt-box">
        <div className="label-row">
          <label htmlFor="title1" className="title">
            Description
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          placeholder="Enter question"
          style={{ width: '100%' }}
          onChange={(e) => onChangeQuestionText(e.target.value)}
        />
      </div>

      <div className="flex flex-row align-items-center justify-content-between mb-4">
        <span className="title-bold"> Answers </span>
      </div>

      <div className="ipt-box">
        <div className="label-row">
          <label htmlFor="title1" className="title">
            Option 1
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          placeholder="Enter answer"
          onChange={(e) => onChangeAnswer(1, e.target.value)}
        />
      </div>
      <div className="ipt-box">
        <div className="label-row">
          <label htmlFor="title1" className="title">
            Option 2
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          placeholder="Enter answer"
          onChange={(e) => onChangeAnswer(2, e.target.value)}
        />
      </div>
      {showInputs()}
      <div className="add-more">
        <a href="#" onClick={() => onAddAnswer()}>
          Add more
        </a>
      </div>
      <div style={{ marginTop: '34.5px' }}>
        <span className="title-bold"> Set correct answer</span>
        <div className="flex flex-row flex-wrap gap-2 mt-3">
          <div
            className={`flex align-items-center justify-content-center option-btn ${
              correctIndices.includes(1) ? 'active' : ''
            }`}
            onClick={() => addOrRemoveCorrectAnswers(1)}
          >
            Option 1
          </div>
          <div
            className={`flex align-items-center justify-content-center option-btn ${
              correctIndices.includes(2) ? 'active' : ''
            }`}
            onClick={() => addOrRemoveCorrectAnswers(2)}
          >
            Option 2
          </div>
          {showOptions()}
        </div>
      </div>
    </div>
  );
};

export default SurveyAnswer;
