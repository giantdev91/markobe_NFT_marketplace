import React, { useState } from 'react';
import AccordionItemSocial from './accordion-item-social';
import AccordionItemEducational from './accordion-item-educational';
import AccordionItemGovernance from './accordion-item-governance';
import AccordionItemTechnicial from './accordion-item-technical';

const Accordion = ({
  hunting,
  addHunting,
  community,
  addCommunity,
  questionanswer,
  addQuestionAnswer,
  visitanswer,
  addVisitAnswer,
  articleanswer,
  addArticleAnswer,
  proofsstaking,
  addProofsStaking,
  proofsliquidity,
  addProofsLiquidity,
  proofsnft,
  addProofsNFT,
  proofstrading,
  addProofsTrading,
  proofstoken,
  addProofsToken,
  joindiscord,
  addJoinDiscord,
  verifydiscord,
  addVerifyDiscord,
  checkdiscord,
  addCheckDiscord,
  joinmedium,
  addJoinMedium,
  verifymedium,
  addVerifyMedium,
  checkmedium,
  addCheckMedium,
  jointelegram,
  addJoinTelegram,
  verifytelegram,
  addVerifyTelegram,
  checktelegram,
  addCheckTelegram,
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
  const [clicked, setClicked] = useState('0');
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  const accordionData = [
    {
      title: 'Social',
      comment: `The block for social interactions with your brand`,
    },
    {
      title: 'Educational',
      comment: `The block will help make your service more clearly`,
    },
    {
      title: 'Governance',
      comment: `The block to collect information from your users`,
    },
    {
      title: 'Technical',
      comment: `The block focused on interaction with your on-chain service`,
    },
  ];

  return (
    <>
      <AccordionItemSocial
        content={accordionData[0]}
        onToggle={() => handleToggle(0)}
        active={clicked === 0}
        joindiscord={joindiscord}
        addJoinDiscord={addJoinDiscord}
        verifydiscord={verifydiscord}
        addVerifyDiscord={addVerifyDiscord}
        checkdiscord={checkdiscord}
        addCheckDiscord={addCheckDiscord}
        joinmedium={joinmedium}
        addJoinMedium={addJoinMedium}
        verifymedium={verifymedium}
        addVerifyMedium={addVerifyMedium}
        checkmedium={checkmedium}
        addCheckMedium={addCheckMedium}
        jointelegram={jointelegram}
        addJoinTelegram={addJoinTelegram}
        verifytelegram={verifytelegram}
        addVerifyTelegram={addVerifyTelegram}
        checktelegram={checktelegram}
        addCheckTelegram={addCheckTelegram}
        followtwitter={followtwitter}
        addFollowTwitter={addFollowTwitter}
        retweet={retweet}
        addRetweet={addRetweet}
        tweet={tweet}
        addTweet={addTweet}
        scomment={scomment}
        addSComment={addSComment}
        quote={quote}
        addQuote={addQuote}
        twittername={twittername}
        addTwitterName={addTwitterName}
        identity={identity}
        addIdentity={addIdentity}
        meme={meme}
        addMeme={addMeme}
        watchyoutube={watchyoutube}
        addWatchYoutube={addWatchYoutube}
        subyoutube={subyoutube}
        addSubYoutube={addSubYoutube}
        likeyoutube={likeyoutube}
        addLikeYoutube={addLikeYoutube}
        commentyoutube={commentyoutube}
        addCommentYoutube={addCommentYoutube}
        sharevideo={sharevideo}
        addShareVideo={addShareVideo}
      />
      <AccordionItemEducational
        content={accordionData[1]}
        onToggle={() => handleToggle(1)}
        active={clicked === 1}
        questionanswer={questionanswer}
        addQuestionAnswer={addQuestionAnswer}
        visitanswer={visitanswer}
        addVisitAnswer={addVisitAnswer}
        articleanswer={articleanswer}
        addArticleAnswer={addArticleAnswer}
      />
      <AccordionItemGovernance
        content={accordionData[2]}
        onToggle={() => handleToggle(2)}
        active={clicked === 2}
        hunting={hunting}
        addHunting={addHunting}
        community={community}
        addCommunity={addCommunity}
      />
      <AccordionItemTechnicial
        content={accordionData[3]}
        onToggle={() => handleToggle(3)}
        active={clicked === 3}
        proofsstaking={proofsstaking}
        addProofsStaking={addProofsStaking}
        proofsliquidity={proofsliquidity}
        addProofsLiquidity={addProofsLiquidity}
        proofsnft={proofsnft}
        addProofsNFT={addProofsNFT}
        proofstrading={proofstrading}
        addProofsTrading={addProofsTrading}
        proofstoken={proofstoken}
        addProofsToken={addProofsToken}
      />
    </>
  );
};

export default Accordion;
