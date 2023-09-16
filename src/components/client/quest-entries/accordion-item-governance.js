import React, {useState} from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';

import Active_Icon_Check from '../../../assets/img/active_check.svg';
import Inactive_Icon_Plus from '../../../assets/img/inactive_plus.svg';

const AccordionItemGovernance = ({content, onToggle, active, hunting, addHunting, community, addCommunity}) => {
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
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn active">Voting</div>
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn">Survey</div>
	            	</div>
	            	<div className="flex flex-row align-items-center accordion-content-item" onClick={addCommunity}>
	                        {community !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Community decision vote</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addHunting}>
	                        {hunting !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Hunting</span>
	                </div>
	           	</div> : <></>
      }
    </div>
  );
};

export default AccordionItemGovernance;
