import React, {useState} from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import {Button} from 'primereact/button';

import SocialContentDiscord from './social-content-discord';
import SocialContentTwitter from './social-content-twitter';
import SocialContentYoutube from './social-content-youtube';
import SocialContentMedium from './social-content-medium';
import SocialContentTelegram from './social-content-telegram';

import Discord_Icon from '../../../assets/img/discord.svg';
import Twitter_Icon from '../../../assets/img/twitter.svg';
import Youtube_Icon from '../../../assets/img/youtube.svg';
import Medium_Icon from '../../../assets/img/medium.svg';
import Telegram_Icon from '../../../assets/img/telegram.svg';

const AccordionItemSocial = ({content, onToggle, active,
  joindiscord, addJoinDiscord, verifydiscord, addVerifyDiscord, checkdiscord, addCheckDiscord,
  joinmedium, addJoinMedium, verifymedium, addVerifyMedium, checkmedium, addCheckMedium,
  jointelegram, addJoinTelegram, verifytelegram, addVerifyTelegram, checktelegram, addCheckTelegram,
  followtwitter, addFollowTwitter, retweet, addRetweet, tweet, addTweet, scomment, addSComment, quote, addQuote,
  twittername, addTwitterName, identity, addIdentity, meme, addMeme,
  watchyoutube, addWatchYoutube, subyoutube, addSubYoutube, likeyoutube, addLikeYoutube, commentyoutube, addCommentYoutube,
  sharevideo, addShareVideo,
}) => {
  const {title, comment} = content;

  const [social, setSocial] = useState('discord');
  const handleShowDiscord = () => setSocial('discord');
  const handleShowTwitter = () => setSocial('twitter');
  const handleShowYoutube = () => setSocial('youtube');
  const handleShowMedium = () => setSocial('medium');
  const handleShowTelegram = () => setSocial('telegram');

  const showAccordionContent = () => {
    switch (social) {
      case 'discord': return <SocialContentDiscord joindiscord={joindiscord} addJoinDiscord={addJoinDiscord} verifydiscord={verifydiscord} addVerifyDiscord={addVerifyDiscord}
        checkdiscord={checkdiscord} addCheckDiscord={addCheckDiscord} />;
      case 'twitter': return <SocialContentTwitter followtwitter={followtwitter} addFollowTwitter={addFollowTwitter} retweet={retweet} addRetweet={addRetweet}
        tweet={tweet} addTweet={addTweet} scomment={scomment} addSComment={addSComment} quote={quote} addQuote={addQuote}
        twittername={twittername} addTwitterName={addTwitterName} identity={identity} addIdentity={addIdentity}
        meme={meme} addMeme={addMeme}/>;
      case 'youtube': return <SocialContentYoutube watchyoutube={watchyoutube} addWatchYoutube={addWatchYoutube} subyoutube={subyoutube} addSubYoutube={addSubYoutube}
        likeyoutube={likeyoutube} addLikeYoutube={addLikeYoutube} commentyoutube={commentyoutube} addCommentYoutube={addCommentYoutube}
        sharevideo={sharevideo} addShareVideo={addShareVideo}/>;
      case 'medium': return <SocialContentMedium joinmedium={joinmedium} addJoinMedium={addJoinMedium} verifymedium={verifymedium} addVerifyMedium={addVerifyMedium}
        checkmedium={checkmedium} addCheckMedium={addCheckMedium}/>;
      case 'telegram': return <SocialContentTelegram jointelegram={jointelegram} addJoinTelegram={addJoinTelegram} verifytelegram={verifytelegram} addVerifyTelegram={addVerifyTelegram}
        checktelegram={checktelegram} addCheckTelegram={addCheckTelegram}/>;
      default: break;
    }
  };

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
      {active &&
                <div className='accordion-content'>
                  <div className='flex flex-row flex-wrap justify-content-between quest_entries_social_btns_group'>
                    <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowDiscord}>
                      <img src={ Discord_Icon }/>
                      <span className="px-3">Discord</span>
                    </Button>
                    <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowTwitter}>
                      <img src={ Twitter_Icon }/>
                      <span className="px-3">Twitter</span>
                    </Button>
                    <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowYoutube}>
                      <img src={ Youtube_Icon }/>
                      <span className="px-3">Youtube</span>
                    </Button>
                    <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowMedium}>
                      <img src={ Medium_Icon }/>
                      <span className="px-3">Medium</span>
                    </Button>
                    <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowTelegram}>
                      <img src={ Telegram_Icon }/>
                      <span className="px-3">Telegram</span>
                    </Button>
                  </div>
                  {
                    showAccordionContent()
                  }
                </div>
      }
    </div>
  );
};

export default AccordionItemSocial;
