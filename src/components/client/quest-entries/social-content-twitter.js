import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const SocialContentTwitter = ({
  followtwitter,
  addFollowTwitter,
  retweet,
  addRetweet,
  tweet,
  addTweet,
  scomment,
  addSComment,
  quote,
  addQuote,
  twittername,
  addTwitterName,
  identity,
  addIdentity,
  meme,
  addMeme,
}) => {
  const titles = [
    'Follow on Twitter',
    'Retweet a Tweet',
    'Tweet on Twitter',
    'Leave a comment a Tweet',
    'Quote Tweet',
    'Check for Twitter name that includes specified characters',
    'Identity',
    'Create a meme content',
  ];

  return (
    <>
      <div className={`accordion-content-item`} onClick={addFollowTwitter}>
        {followtwitter !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[0]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addRetweet}>
        {retweet !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[1]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addTweet}>
        {tweet !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[2]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addSComment}>
        {scomment !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[3]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addQuote}>
        {quote !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[4]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addTwitterName}>
        {twittername !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[5]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addIdentity}>
        {identity !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[6]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addMeme}>
        {meme !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[7]} </span>
      </div>
    </>
  );
};

export default SocialContentTwitter;
