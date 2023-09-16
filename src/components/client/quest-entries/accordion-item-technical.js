import React, {useState} from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';

import Active_Icon_Check from '../../../assets/img/active_check.svg';
import Inactive_Icon_Plus from '../../../assets/img/inactive_plus.svg';

const AccordionItemTechnical = ({content, onToggle, active,
  proofsstaking, addProofsStaking, proofsliquidity, addProofsLiquidity, proofsnft, addProofsNFT, proofstrading, addProofsTrading,
  proofstoken, addProofsToken}) => {
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
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn active">On-chain</div>
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn">Build</div>
	            		<div className="flex-grow-1 flex align-items-center justify-content-center btn">Big bounty</div>
	            	</div>
	            	<div className="flex flex-row align-items-center accordion-content-item" onClick={addProofsStaking}>
	                        {proofsstaking !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Proofs of staking</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addProofsLiquidity}>
	                        {proofsliquidity !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Proofs of liquidity provider</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addProofsNFT}>
	                        {proofsnft !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Proofs of NFT balance</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addProofsTrading}>
	                        {proofstrading !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Proofs of trading volume</span>
	                </div>
	                <div className="flex flex-row align-items-center accordion-content-item" onClick={addProofsToken}>
	                        {proofstoken !== '-1' ? <img src={Active_Icon_Check}/> : <img src={Inactive_Icon_Plus}/>}
	                        <span className='title'>Proofs of token balance</span>
	                </div>
	           	</div> : <></>
      }
    </div>
  );
};

export default AccordionItemTechnical;
