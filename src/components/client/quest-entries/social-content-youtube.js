import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const SocialContentYoutube = ({
  watchyoutube,
  addWatchYoutube,
  subyoutube,
  addSubYoutube,
  likeyoutube,
  addLikeYoutube,
  commentyoutube,
  addCommentYoutube,
  sharevideo,
  addShareVideo,
}) => {
  const titles = [
    'Watch a video on YouTube',
    'Subscribe to YouTube channel',
    'Like a video on YouTube',
    'Leave a comment on YouTube',
    'Share the video on twitter',
  ];

  return (
    <>
      <div className={`accordion-content-item`} onClick={addWatchYoutube}>
        {watchyoutube !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[0]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addSubYoutube}>
        {subyoutube !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[1]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addLikeYoutube}>
        {likeyoutube !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[2]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addCommentYoutube}>
        {commentyoutube !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[3]} </span>
      </div>
      <div className={`accordion-content-item`} onClick={addShareVideo}>
        {sharevideo !== '-1' ? <img src={Active_Icon} /> : <img src={Inactive_Icon} />}{' '}
        <span className="title"> {titles[4]} </span>
      </div>
    </>
  );
};

export default SocialContentYoutube;
