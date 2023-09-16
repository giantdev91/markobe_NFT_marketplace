import React, {useState} from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';

import Active_Icon_Check from '../../../assets/img/active_check.svg';
import Inactive_Icon_Plus from '../../../assets/img/inactive_plus.svg';

const AccordionItemEducational = ({content, onToggle, active,
  questionanswer, addQuestionAnswer, visitanswer, addVisitAnswer, articleanswer, addArticleAnswer}) => {
  // const [isActive, setIsActive] = useState(false);
  // console.log(content)
  const {title, comment} = content;

  return (
    <div className='accordion-item'>
      <div className={`accordion-title ${ active ? 'active' : '' }`} onClick={ onToggle }>
        <div className='title-part'>
          <p className='title'>{ title }</p>
          <p className='comment'>{ comment }</p>
        </div>
        <div>
          {active ? <img src={Active_Icon}/> : <img src={Inactive_Icon}/> }
        </div>
      </div>
      {active ?
	            <div className='accordion-content'>
	            	<div className="flex align-items-center justify-content-between gap-2 mt-2">
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn active">Quizzes</div>
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn">Creative Content</div>
	            	</div>
	            	<div className="flex flex-row align-items-center accordion-content-item" onClick={addQuestionAnswer}>
	                        {questionanswer !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Set up questions and choose the correct answer</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addVisitAnswer}>
	                        {visitanswer !== '-1'? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Visit the site and answer questions</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addArticleAnswer}>
	                        {articleanswer !== '-1'? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Read the article and answer the questions</span>
	                </div>
	           	</div> : <></>
      }
    </div>
  );
};

export default AccordionItemEducational;
