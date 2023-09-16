import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import info_icon from '../../../../assets/img/info.svg';
import down_icon from '../../../../assets/img/down.svg';
// import { Accordion, AccordionTab } from 'primereact/accordion';
import Accordion from '../../../../components/client/quest-entries/accordion';
import { Button } from 'primereact/button';

import GovernanceHunting from '../../../../components/client/quest-entries/governance-hunting';
import GovernanceCommunity from '../../../../components/client/quest-entries/governance-community';

import EducationalQuestionAnswer from '../../../../components/client/quest-entries/educational-question-answer';
import EducationalVisitAnswer from '../../../../components/client/quest-entries/educational-visit-answer';
import EducationalArticleAnswer from '../../../../components/client/quest-entries/educational-article-answer';

import TechnicalProofsStaking from '../../../../components/client/quest-entries/technical-proofs-staking';
import TechnicalProofsLiquidity from '../../../../components/client/quest-entries/technical-proofs-liquidity';
import TechnicalProofsNFT from '../../../../components/client/quest-entries/technical-proofs-nft';
import TechnicalProofsToken from '../../../../components/client/quest-entries/technical-proofs-token';
import TechnicalProofsTrading from '../../../../components/client/quest-entries/technical-proofs-trading';

import SocialComponent from '../../../../components/client/quest-entries/social-component';

const JourneyQuestEntries = ({ setTab, onQuestEntriesAdd, onQuestEntriesDelete, onQuestEntriesSave }) => {
  const [activities, setActivities] = useState([]);
  function delAllEntries() {
    setActivities([]);
  }

  // Social
  const [joindiscord, setJoinDiscord] = useState('-1');
  function addJoinDiscord() {
    if (joindiscord === '-1') {
      setJoinDiscord('SocialJoinDiscord');
      activities.push('SocialJoinDiscord'); // add activity
    } else {
      setJoinDiscord('-1');
      const index = activities.indexOf('SocialJoinDiscord');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialJoinDiscord');
    }
  }
  const [verifydiscord, setVerifyDiscord] = useState('-1');
  function addVerifyDiscord() {
    if (verifydiscord === '-1') {
      setVerifyDiscord('SocialVerifyDiscord');
      activities.push('SocialVerifyDiscord'); // add activity
    } else {
      setVerifyDiscord('-1');
      const index = activities.indexOf('SocialVerifyDiscord');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialVerifyDiscord');
    }
  }
  const [checkdiscord, setCheckDiscord] = useState('-1');
  function addCheckDiscord() {
    if (checkdiscord === '-1') {
      setCheckDiscord('SocialCheckDiscord');
      activities.push('SocialCheckDiscord'); // add activity
    } else {
      setCheckDiscord('-1');
      const index = activities.indexOf('SocialCheckDiscord');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialCheckDiscord');
    }
  }
  const [joinmedium, setJoinMedium] = useState('-1');
  function addJoinMedium() {
    if (joinmedium === '-1') {
      setJoinMedium('SocialJoinMedium');
      activities.push('SocialJoinMedium'); // add activity
    } else {
      // console.log("index = ", index);
      setJoinMedium('-1');
      const index = activities.indexOf('SocialJoinMedium');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialJoinMedium');
    }
  }
  const [verifymedium, setVerifyMedium] = useState('-1');
  function addVerifyMedium() {
    if (verifymedium === '-1') {
      setVerifyMedium('SocialVerifyMedium');
      activities.push('SocialVerifyMedium'); // add activity
    } else {
      setVerifyMedium('-1');
      const index = activities.indexOf('SocialVerifyMedium');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialVerifyMedium');
    }
  }
  const [checkmedium, setCheckMedium] = useState('-1');
  function addCheckMedium() {
    if (checkmedium === '-1') {
      setCheckMedium('SocialCheckMedium');
      activities.push('SocialCheckMedium'); // add activity
    } else {
      setCheckMedium('-1');
      const index = activities.indexOf('SocialCheckMedium');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialCheckMedium');
    }
  }
  const [jointelegram, setJoinTelegram] = useState('-1');
  function addJoinTelegram() {
    if (jointelegram === '-1') {
      setJoinTelegram('SocialJoinTelegram');
      activities.push('SocialJoinTelegram'); // add activity
    } else {
      // console.log("index = ", index);
      setJoinTelegram('-1');
      const index = activities.indexOf('SocialJoinTelegram');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialJoinTelegram');
    }
  }
  const [verifytelegram, setVerifyTelegram] = useState('-1');
  function addVerifyTelegram() {
    if (verifytelegram === '-1') {
      setVerifyTelegram('SocialVerifyTelegram');
      activities.push('SocialVerifyTelegram'); // add activity
    } else {
      setVerifyTelegram('-1');
      const index = activities.indexOf('SocialVerifyTelegram');
      if (index > -1) {
        activities.splice(index, 1);
      }

      onQuestEntriesDelete('SocialVerifyTelegram');
    }
  }
  const [checktelegram, setCheckTelegram] = useState('-1');
  function addCheckTelegram() {
    if (checktelegram === '-1') {
      setCheckTelegram('SocialCheckTelegram');
      activities.push('SocialCheckTelegram'); // add activity
    } else {
      setCheckTelegram('-1');
      const index = activities.indexOf('SocialCheckTelegram');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialCheckTelegram');
    }
  }

  const [followtwitter, setFollowTwitter] = useState('-1');
  function addFollowTwitter() {
    if (followtwitter === '-1') {
      setFollowTwitter('SocialFollowTwitter');
      activities.push('SocialFollowTwitter'); // add activity
    } else {
      setFollowTwitter('-1');
      const index = activities.indexOf('SocialFollowTwitter');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialFollowTwitter');
    }
  }
  const [retweet, setRetweet] = useState('-1');
  function addRetweet() {
    if (retweet === '-1') {
      setRetweet('SocialRetweetTweet');
      activities.push('SocialRetweetTweet'); // add activity
    } else {
      setRetweet('-1');
      const index = activities.indexOf('SocialRetweetTweet');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialRetweetTweet');
    }
  }
  const [tweet, setTweet] = useState('-1');
  function addTweet() {
    if (tweet === '-1') {
      setTweet('SocialTweetTwitter');
      activities.push('SocialTweetTwitter'); // add activity
    } else {
      setTweet('-1');
      const index = activities.indexOf('SocialTweetTwitter');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialTweetTwitter');
    }
  }
  const [scomment, setSComment] = useState('-1');
  function addSComment() {
    if (scomment === '-1') {
      setSComment('SocialCommentTweet');
      activities.push('SocialCommentTweet'); // add activity
    } else {
      setSComment('-1');
      const index = activities.indexOf('SocialCommentTweet');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialCommentTweet');
    }
  }
  const [quote, setQuote] = useState('-1');
  function addQuote() {
    if (quote === '-1') {
      setQuote('SocialQuoteTweet');
      activities.push('SocialQuoteTweet'); // add activity
    } else {
      setQuote('-1');
      const index = activities.indexOf('SocialQuoteTweet');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialQuoteTweet');
    }
  }
  const [twittername, setTwitterName] = useState('-1');
  function addTwitterName() {
    if (twittername === '-1') {
      setTwitterName('SocialTwitterName');
      activities.push('SocialTwitterName'); // add activity
    } else {
      setTwitterName('-1');
      const index = activities.indexOf('SocialTwitterName');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialTwitterName');
    }
  }
  const [identity, setIdentity] = useState('-1');
  function addIdentity() {
    if (identity === '-1') {
      setIdentity('SocialIdentity');
      activities.push('SocialIdentity'); // add activity
    } else {
      setIdentity('-1');
      const index = activities.indexOf('SocialIdentity');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialIdentity');
    }
  }
  const [meme, setMeme] = useState('-1');
  function addMeme() {
    if (meme === '-1') {
      setMeme('SocialMemeContent');
      activities.push('SocialMemeContent'); // add activity
    } else {
      setMeme('-1');
      const index = activities.indexOf('SocialMemeContent');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialMemeContent');
    }
  }

  const [watchyoutube, setWatchYoutube] = useState('-1');
  function addWatchYoutube() {
    if (watchyoutube === '-1') {
      setWatchYoutube('SocialWatchYoutube');
      activities.push('SocialWatchYoutube'); // add activity
    } else {
      setWatchYoutube('-1');
      const index = activities.indexOf('SocialWatchYoutube');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialWatchYoutube');
    }
  }
  const [subyoutube, setSubYoutube] = useState('-1');
  function addSubYoutube() {
    if (subyoutube === '-1') {
      setSubYoutube('SocialSubYoutube');
      activities.push('SocialSubYoutube'); // add activity
    } else {
      setSubYoutube('-1');
      const index = activities.indexOf('SocialSubYoutube');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialSubYoutube');
    }
  }
  const [likeyoutube, setLikeYoutube] = useState('-1');
  function addLikeYoutube() {
    if (likeyoutube === '-1') {
      setLikeYoutube('SocialLikeYoutube');
      activities.push('SocialLikeYoutube'); // add activity
    } else {
      setLikeYoutube('-1');
      const index = activities.indexOf('SocialLikeYoutube');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialLikeYoutube');
    }
  }
  const [commentyoutube, setCommentYoutube] = useState('-1');
  function addCommentYoutube() {
    if (commentyoutube === '-1') {
      setCommentYoutube('SocialCommentYoutube');
      activities.push('SocialCommentYoutube'); // add activity
    } else {
      setCommentYoutube('-1');
      const index = activities.indexOf('SocialCommentYoutube');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialCommentYoutube');
    }
  }
  const [sharevideo, setShareVideo] = useState('-1');
  function addShareVideo() {
    if (sharevideo === '-1') {
      setShareVideo('SocialShareVideo');
      activities.push('SocialShareVideo'); // add activity
    } else {
      setShareVideo('-1');
      const index = activities.indexOf('SocialShareVideo');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('SocialShareVideo');
    }
  }

  // Educational
  const [questionanswer, setQuestionAnswer] = useState('-1');
  function addQuestionAnswer() {
    if (questionanswer === '-1') {
      setQuestionAnswer('EducationalQuestionAnswer');
      activities.push('EducationalQuestionAnswer'); // add activity
    } else {
      setQuestionAnswer('-1');
      const index = activities.indexOf('EducationalQuestionAnswer');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('EducationalQuestionAnswer');
    }
  }
  const [visitanswer, setVisitAnswer] = useState('-1');
  function addVisitAnswer() {
    if (visitanswer === '-1') {
      setVisitAnswer('EducationalVisitAnswer');
      activities.push('EducationalVisitAnswer'); // add activity
    } else {
      setVisitAnswer('-1');
      const index = activities.indexOf('EducationalVisitAnswer');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('EducationalVisitAnswer');
    }
  }
  const [articleanswer, setArticleAnswer] = useState('-1');
  function addArticleAnswer() {
    if (articleanswer === '-1') {
      setArticleAnswer('EducationalArticleAnswer');
      activities.push('EducationalArticleAnswer'); // add activity
    } else {
      setArticleAnswer('-1');
      const index = activities.indexOf('EducationalArticleAnswer');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('EducationalArticleAnswer');
    }
  }
  // Governance
  const [hunting, setHunting] = useState('-1'); // "hunting"
  function addHunting() {
    if (hunting === '-1') {
      setHunting('GovernanceHunting');
      activities.push('GovernanceHunting'); // add activity
    } else {
      setHunting('-1');
      const index = activities.indexOf('GovernanceHunting');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('GovernanceHunting');
    }
  }
  const [community, setCommunity] = useState('-1'); // "communitydecisionvote"
  function addCommunity() {
    if (community === '-1') {
      setCommunity('GovernanceCommunity');
      activities.push('GovernanceCommunity'); // add activity
    } else {
      setCommunity('-1');
      const index = activities.indexOf('GovernanceCommunity');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('GovernanceCommunity');
    }
  }
  // Technological
  const [proofsstaking, setProofsStraking] = useState('-1');
  function addProofsStaking() {
    if (proofsstaking === '-1') {
      setProofsStraking('TechnicalProofsStaking');
      activities.push('TechnicalProofsStaking'); // add activity
    } else {
      setProofsStraking('-1');
      const index = activities.indexOf('TechnicalProofsStaking');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('TechnicalProofsStaking');
    }
  }
  const [proofsliquidity, setProofsLiquidity] = useState('-1');
  function addProofsLiquidity() {
    if (proofsliquidity === '-1') {
      setProofsLiquidity('TechnicalProofsLiquidity');
      activities.push('TechnicalProofsLiquidity'); // add activity
    } else {
      setProofsLiquidity('-1');
      const index = activities.indexOf('TechnicalProofsLiquidity');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('TechnicalProofsLiquidity');
    }
  }
  const [proofsnft, setProofsNFT] = useState('-1');
  function addProofsNFT() {
    if (proofsnft === '-1') {
      setProofsNFT('TechnicalProofsNFT');
      activities.push('TechnicalProofsNFT'); // add activity
    } else {
      setProofsNFT('-1');
      const index = activities.indexOf('TechnicalProofsNFT');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('TechnicalProofsNFT');
    }
  }
  const [proofstrading, setProofsTrading] = useState('-1');
  function addProofsTrading() {
    if (proofstrading === '-1') {
      setProofsTrading('TechnicalProofsTrading');
      activities.push('TechnicalProofsTrading'); // add activity
    } else {
      setProofsTrading('-1');
      const index = activities.indexOf('TechnicalProofsTrading');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('TechnicalProofsTrading');
    }
  }
  const [proofstoken, setProofsToken] = useState('-1');
  function addProofsToken() {
    if (proofstoken === '-1') {
      setProofsToken('TechnicalProofsToken');
      activities.push('TechnicalProofsToken'); // add activity
    } else {
      setProofsToken('-1');
      const index = activities.indexOf('TechnicalProofsToken');
      if (index > -1) {
        activities.splice(index, 1);
      }
      onQuestEntriesDelete('TechnicalProofsToken');
    }
  }

  const onJoinDiscord = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialJoinDiscord',
      taskType: 'social',
      taskTitle: 'Join Discord Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onVerifyDiscord = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialVerifyDiscord',
      taskType: 'social',
      taskTitle: 'Verify role in Discord Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onCheckDiscord = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialCheckDiscord',
      taskType: 'social',
      taskTitle: 'Check for Discord name that includes Specified characters',
      label: 'URL',
      value: data.value,
    });
  };

  const onJoinMedium = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialJoinMedium',
      taskType: 'social',
      taskTitle: 'Join Medium Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onVerifyMedium = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialVerifyMedium',
      taskType: 'social',
      taskTitle: 'Verify role in Medium Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onCheckMedium = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialCheckMedium',
      taskType: 'social',
      taskTitle: 'Check for Medium name that includes Specified characters',
      label: 'URL',
      value: data.value,
    });
  };

  const onJoinTelegram = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialJoinTelegram',
      taskType: 'social',
      taskTitle: 'Join Telegram Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onVerifyTelegram = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialVerifyTelegram',
      taskType: 'social',
      taskTitle: 'Verify role in Telegram Server',
      label: 'URL',
      value: data.value,
    });
  };

  const onCheckTelegram = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialCheckTelegram',
      taskType: 'social',
      taskTitle: 'Check for Telegram name that includes Specified characters',
      label: 'URL',
      value: data.value,
    });
  };

  const onFollowTwitter = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialFollowTwitter',
      taskType: 'social',
      taskTitle: 'Follow on Twitter',
      label: 'URL',
      value: data.value,
    });
  };

  const onRetweetTweet = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialRetweetTweet',
      taskType: 'social',
      taskTitle: 'Retweet a Tweet',
      label: 'URL',
      value: data.value,
    });
  };

  const onTweetTwitter = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialTweetTwitter',
      taskType: 'social',
      taskTitle: 'Tweet on Twitter',
      label: 'URL',
      value: data.value,
    });
  };

  const onCommentTweet = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialCommentTweet',
      taskType: 'social',
      taskTitle: 'Leave a comment a Tweet',
      label: 'URL',
      value: data.value,
    });
  };

  const onQuoteTweet = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialQuoteTweet',
      taskType: 'social',
      taskTitle: 'Quote Tweet',
      label: 'URL',
      value: data.value,
    });
  };

  const onTwitterName = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialTwitterName',
      taskType: 'social',
      taskTitle: 'Check for Twitter name that includes specified characters',
      label: 'URL',
      value: data.value,
    });
  };

  const onIdentity = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialIdentity',
      taskType: 'social',
      taskTitle: 'Identity',
      label: 'URL',
      value: data.value,
    });
  };

  const onMemeContent = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialMemeContent',
      taskType: 'social',
      taskTitle: 'Create a meme content',
      label: 'URL',
      value: data.value,
    });
  };

  const onWatchYoutube = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialWatchYoutube',
      taskType: 'social',
      taskTitle: 'Watch a video on YouTube',
      label: 'URL',
      value: data.value,
    });
  };

  const onSubYoutube = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialSubYoutube',
      taskType: 'social',
      taskTitle: 'Subscribe to YouTube channel',
      label: 'URL',
      value: data.value,
    });
  };

  const onLikeYoutube = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialLikeYoutube',
      taskType: 'social',
      taskTitle: 'Like a video on YouTube',
      label: 'URL',
      value: data.value,
    });
  };

  const onCommentYoutube = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialCommentYoutube',
      taskType: 'social',
      taskTitle: 'Leave a comment on YouTube',
      label: 'URL',
      value: data.value,
    });
  };

  const onShareVideo = (data) => {
    onQuestEntriesAdd({
      taskName: 'SocialShareVideo',
      taskType: 'social',
      taskTitle: 'Share the video on twitter',
      label: 'URL',
      value: data.value,
    });
  };

  const onQuestionAnswer = (data) => {
    onQuestEntriesAdd({
      taskName: 'EducationalQuestionAnswer',
      taskType: 'educational',
      taskTitle: 'Setup questions and choose the correct answer',
      count: data.length,
      questions: data,
    });
  };

  const onVisitAnswer = (URL, questions) => {
    onQuestEntriesAdd({
      taskName: 'EducationalVisitAnswer',
      taskType: 'educational',
      taskTitle: 'Visit the site and answer questions',
      count: questions.length,
      questions: questions,
      URL: URL,
    });
  };

  const onArticleAnswer = (URL, questions) => {
    onQuestEntriesAdd({
      taskName: 'EducationalArticleAnswer',
      taskType: 'educational',
      taskTitle: 'Read the article and answer the questions',
      count: questions.length,
      questions: questions,
      URL: URL,
    });
  };

  const onGovernanceCommunity = (data) => {
    onQuestEntriesAdd({
      taskName: 'GovernanceCommunity',
      taskType: 'governance',
      taskTitle: 'Community decision votes',
      count: data.length,
      questions: data,
    });
  };

  const onGovernanceHunting = (data) => {
    onQuestEntriesAdd({
      taskName: 'GovernanceHunting',
      taskType: 'governance',
      taskTitle: 'Hunting',
      survey: data,
    });
  };

  const onProofsStaking = (data) => {
    onQuestEntriesAdd({
      taskName: 'TechnicalProofsStaking',
      taskType: 'techincal',
      taskTitle: 'Proofs of staking',
      staking: data,
    });
  };

  const onProofsLiquidity = (data) => {
    onQuestEntriesAdd({
      taskName: 'TechnicalProofsLiquidity',
      taskType: 'techincal',
      taskTitle: 'Proofs of liquidity',
      liquidity: data,
    });
  };

  const onProofsNFT = (data) => {
    onQuestEntriesAdd({
      taskName: 'TechnicalProofsNFT',
      taskType: 'techincal',
      taskTitle: 'Proofs of NFT',
      NFT: data,
    });
  };

  const onProofsToken = (data) => {
    onQuestEntriesAdd({
      taskName: 'TechnicalProofsToken',
      taskType: 'techincal',
      taskTitle: 'Proofs of token balance',
      token: data,
    });
  };

  const onProofsTrading = (data) => {
    onQuestEntriesAdd({
      taskName: 'TechnicalProofsTrading',
      taskType: 'techincal',
      taskTitle: 'Proofs of trading volume',
      trading: data,
    });
  };

  const closeActivity = (kind) => {
    console.log(kind);
    console.log(activities);
    switch (kind) {
      case 'GovernanceCommunity':
        addCommunity();
        break;
      case 'GovernanceHunting':
        addHunting();
        break;

      case 'EducationalQuestionAnswer':
        addQuestionAnswer();
        break;
      case 'EducationalVisitAnswer':
        addVisitAnswer();
        break;
      case 'EducationalArticleAnswer':
        addArticleAnswer();
        break;

      case 'TechnicalProofsStaking':
        addProofsStaking();
        break;
      case 'TechnicalProofsLiquidity':
        addProofsLiquidity();
        break;
      case 'TechnicalProofsNFT':
        addProofsNFT();
        break;
      case 'TechnicalProofsToken':
        addProofsToken();
        break;
      case 'TechnicalProofsTrading':
        addProofsTrading();
        break;

      case 'SocialJoinDiscord':
        addJoinDiscord();
        break;
      case 'SocialVerifyDiscord':
        addVerifyDiscord();
        break;
      case 'SocialCheckDiscord':
        addCheckDiscord();
        break;
      case 'SocialJoinMedium':
        addJoinMedium();
        break;
      case 'SocialVerifyMedium':
        addVerifyMedium();
        break;
      case 'SocialCheckMedium':
        addCheckMedium();
        break;
      case 'SocialJoinTelegram':
        addJoinTelegram();
        break;
      case 'SocialVerifyTelegram':
        addVerifyTelegram();
        break;
      case 'SocialCheckTelegram':
        addCheckTelegram();
        break;

      case 'SocialFollowTwitter':
        addFollowTwitter();
        break;
      case 'SocialRetweetTweet':
        addRetweet();
        break;
      case 'SocialTweetTwitter':
        addTweet();
        break;
      case 'SocialCommentTweet':
        addSComment();
        break;
      case 'SocialQuoteTweet':
        addQuote();
        break;
      case 'SocialTwitterName':
        addTwitterName();
        break;
      case 'SocialIdentity':
        addIdentity();
        break;
      case 'SocialMemeContent':
        addMeme();
        break;

      case 'SocialWatchYoutube':
        addWatchYoutube();
        break;
      case 'SocialSubYoutube':
        addSubYoutube();
        break;
      case 'SocialLikeYoutube':
        addLikeYoutube();
        break;
      case 'SocialCommentYoutube':
        addCommentYoutube();
        break;
      case 'SocialShareVideo':
        addShareVideo();
        break;
      default:
        break;
    }
    // const index = activities.indexOf(kind);
    // console.log("before splice => ", activities);
    // if (index > -1)
    // 	activities.splice(index, 1);
    // console.log("after splice => ", activities);
  };
  const [activeEmpty, setActiveEmpty] = useState(false);
  const navigate = useNavigate();
  const nextTab = () => {
    if (activities.length > 0) {
      onQuestEntriesSave();
      setTab(3);
    } else {
      setActiveEmpty(true);
    }
  };
  const prevTab = () => {
    setTab(1);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-row justify-content-between gap-3 admin-quest-container">
          <div className="quest-left-containter">
            <div className="flex flex-row align-items-center">
              <span className="admin-title">Templates</span>
              <img src={info_icon} className="admin-icon" />
            </div>
            <div className="accordion">
              {/* Accordion part */}
              <Accordion
                hunting={hunting}
                addHunting={addHunting}
                community={community}
                addCommunity={addCommunity}
                questionanswer={questionanswer}
                addQuestionAnswer={addQuestionAnswer}
                visitanswer={visitanswer}
                addVisitAnswer={addVisitAnswer}
                articleanswer={articleanswer}
                addArticleAnswer={addArticleAnswer}
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
            </div>
          </div>
          <div className="quest-right-container">
            <div className="flex flex-row align-items-center justify-content-between quest-entries-active-title">
              <div>
                <span className="admin-title">Active</span>
                <img src={info_icon} className="admin-icon" />
              </div>
              <p className="quote-entries-del-comment" onClick={delAllEntries}>
                Clear all templates
              </p>
            </div>

            {activities.map((activity) => {
              switch (activity) {
                case 'GovernanceCommunity':
                  return (
                    <GovernanceCommunity
                      closeActivity={closeActivity}
                      onAction={onGovernanceCommunity}
                    />
                  );
                case 'GovernanceHunting':
                  return (
                    <GovernanceHunting
                      closeActivity={closeActivity}
                      onAction={onGovernanceHunting}
                    />
                  );

                case 'EducationalQuestionAnswer':
                  return (
                    <EducationalQuestionAnswer
                      closeActivity={closeActivity}
                      onAction={onQuestionAnswer}
                    />
                  );
                case 'EducationalVisitAnswer':
                  return (
                    <EducationalVisitAnswer
                      closeActivity={closeActivity}
                      onAction={onVisitAnswer}
                    />
                  );
                case 'EducationalArticleAnswer':
                  return (
                    <EducationalArticleAnswer
                      closeActivity={closeActivity}
                      onAction={onArticleAnswer}
                    />
                  );

                case 'TechnicalProofsStaking':
                  return (
                    <TechnicalProofsStaking
                      closeActivity={closeActivity}
                      onAction={onProofsStaking}
                    />
                  );
                case 'TechnicalProofsLiquidity':
                  return (
                    <TechnicalProofsLiquidity
                      closeActivity={closeActivity}
                      onAction={onProofsLiquidity}
                    />
                  );
                case 'TechnicalProofsNFT':
                  return (
                    <TechnicalProofsNFT closeActivity={closeActivity} onAction={onProofsNFT} />
                  );
                case 'TechnicalProofsToken':
                  return (
                    <TechnicalProofsToken closeActivity={closeActivity} onAction={onProofsToken} />
                  );
                case 'TechnicalProofsTrading':
                  return (
                    <TechnicalProofsTrading
                      closeActivity={closeActivity}
                      onAction={onProofsTrading}
                    />
                  );

                case 'SocialJoinDiscord':
                  return (
                    <SocialComponent
                      key="SocialJoinDiscord"
                      type="Discord"
                      close_kind="SocialJoinDiscord"
                      closeActivity={closeActivity}
                      title="Join Discord Server"
                      comment=""
                      onAction={onJoinDiscord}
                    />
                  );
                case 'SocialVerifyDiscord':
                  return (
                    <SocialComponent
                      key="SocialVerifyDiscord"
                      type="Discord"
                      close_kind="SocialVerifyDiscord"
                      closeActivity={closeActivity}
                      title="Verify role in Discord Server"
                      comment=""
                      onAction={onVerifyDiscord}
                    />
                  );
                case 'SocialCheckDiscord':
                  return (
                    <SocialComponent
                      key="SocialCheckDiscord"
                      type="Discord"
                      close_kind="SocialCheckDiscord"
                      closeActivity={closeActivity}
                      title="Check for Discord name that includes Specified characters"
                      comment=""
                      onAction={onCheckDiscord}
                    />
                  );
                case 'SocialJoinMedium':
                  return (
                    <SocialComponent
                      key="SocialJoinMedium"
                      type="Medium"
                      close_kind="SocialJoinMedium"
                      closeActivity={closeActivity}
                      title="Join Medium Server"
                      comment=""
                      onAction={onJoinMedium}
                    />
                  );
                case 'SocialVerifyMedium':
                  return (
                    <SocialComponent
                      key="SocialVerifyMedium"
                      type="Medium"
                      close_kind="SocialVerifyMedium"
                      closeActivity={closeActivity}
                      title="Verify role in Medium Server"
                      comment=""
                      onAction={onVerifyMedium}
                    />
                  );
                case 'SocialCheckMedium':
                  return (
                    <SocialComponent
                      key="SocialCheckMedium"
                      type="Medium"
                      close_kind="SocialCheckMedium"
                      closeActivity={closeActivity}
                      title="Check for Medium name that includes Specified characters"
                      comment=""
                      onAction={onCheckMedium}
                    />
                  );
                case 'SocialJoinTelegram':
                  return (
                    <SocialComponent
                      key="SocialJoinTelegram"
                      type="Telegram"
                      close_kind="SocialJoinTelegram"
                      closeActivity={closeActivity}
                      title="Join Telegram Server"
                      comment=""
                      onAction={onJoinTelegram}
                    />
                  );
                case 'SocialVerifyTelegram':
                  return (
                    <SocialComponent
                      key="SocialVerifyTelegram"
                      type="Telegram"
                      close_kind="SocialVerifyTelegram"
                      closeActivity={closeActivity}
                      title="Verify role in Telegram Server"
                      comment=""
                      onAction={onVerifyTelegram}
                    />
                  );
                case 'SocialCheckTelegram':
                  return (
                    <SocialComponent
                      key="SocialCheckTelegram"
                      type="Telegram"
                      close_kind="SocialCheckTelegram"
                      closeActivity={closeActivity}
                      title="Check for Telegram name that includes Specified characters"
                      comment=""
                      onAction={onCheckTelegram}
                    />
                  );

                case 'SocialFollowTwitter':
                  return (
                    <SocialComponent
                      key="SocialFollowTwitter"
                      type="Twitter"
                      close_kind="SocialFollowTwitter"
                      closeActivity={closeActivity}
                      title="Follow on Twitter"
                      comment=""
                      onAction={onFollowTwitter}
                    />
                  );
                case 'SocialRetweetTweet':
                  return (
                    <SocialComponent
                      key="SocialRetweetTweet"
                      type="Twitter"
                      close_kind="SocialRetweetTweet"
                      closeActivity={closeActivity}
                      title="Retweet a Tweet"
                      comment=""
                      onAction={onRetweetTweet}
                    />
                  );
                case 'SocialTweetTwitter':
                  return (
                    <SocialComponent
                      key="SocialTweetTwitter"
                      type="Twitter"
                      close_kind="SocialTweetTwitter"
                      closeActivity={closeActivity}
                      title="Tweet on Twitter"
                      comment=""
                      onAction={onTweetTwitter}
                    />
                  );
                case 'SocialCommentTweet':
                  return (
                    <SocialComponent
                      key="SocialCommentTweet"
                      type="Twitter"
                      close_kind="SocialCommentTweet"
                      closeActivity={closeActivity}
                      title="Leave a comment a Tweet"
                      comment=""
                      onAction={onCommentTweet}
                    />
                  );
                case 'SocialQuoteTweet':
                  return (
                    <SocialComponent
                      key="SocialQuoteTweet"
                      type="Twitter"
                      close_kind="SocialQuoteTweet"
                      closeActivity={closeActivity}
                      title="Quote Tweet"
                      comment=""
                      onAction={onQuoteTweet}
                    />
                  );
                case 'SocialTwitterName':
                  return (
                    <SocialComponent
                      key="SocialTwitterName"
                      type="Twitter"
                      close_kind="SocialTwitterName"
                      closeActivity={closeActivity}
                      title="Check for Twitter name that includes specified characters"
                      comment=""
                      onAction={onTwitterName}
                    />
                  );
                case 'SocialIdentity':
                  return (
                    <SocialComponent
                      key="SocialIdentity"
                      type="Twitter"
                      close_kind="SocialIdentity"
                      closeActivity={closeActivity}
                      title="Identity"
                      comment=""
                      onAction={onIdentity}
                    />
                  );
                case 'SocialMemeContent':
                  return (
                    <SocialComponent
                      key="SocialMemeContent"
                      type="Twitter"
                      close_kind="SocialMemeContent"
                      closeActivity={closeActivity}
                      title="Create a meme content"
                      comment=""
                      onAction={onMemeContent}
                    />
                  );

                case 'SocialWatchYoutube':
                  return (
                    <SocialComponent
                      key="SocialWatchYoutube"
                      type="Youtube"
                      close_kind="SocialWatchYoutube"
                      closeActivity={closeActivity}
                      title="Watch a video on YouTube"
                      comment=""
                      onAction={onWatchYoutube}
                    />
                  );
                case 'SocialSubYoutube':
                  return (
                    <SocialComponent
                      key="SocialSubYoutube"
                      type="Youtube"
                      close_kind="SocialSubYoutube"
                      closeActivity={closeActivity}
                      title="Subscribe to YouTube channel"
                      comment=""
                      onAction={onSubYoutube}
                    />
                  );
                case 'SocialLikeYoutube':
                  return (
                    <SocialComponent
                      key="SocialLikeYoutube"
                      type="Youtube"
                      close_kind="SocialLikeYoutube"
                      closeActivity={closeActivity}
                      title="Like a video on YouTube"
                      comment=""
                      onAction={onLikeYoutube}
                    />
                  );
                case 'SocialCommentYoutube':
                  return (
                    <SocialComponent
                      key="SocialCommentYoutube"
                      type="Youtube"
                      close_kind="SocialCommentYoutube"
                      closeActivity={closeActivity}
                      title="Leave a comment on YouTube"
                      comment=""
                      onAction={onCommentYoutube}
                    />
                  );
                case 'SocialShareVideo':
                  return (
                    <SocialComponent
                      key="SocialShareVideo"
                      type="Youtube"
                      close_kind="SocialShareVideo"
                      closeActivity={closeActivity}
                      title="Share the video on twitter"
                      comment=""
                      onAction={onShareVideo}
                    />
                  );

                default:
                  break;
              }
            })}
            {!(activities.length > 0) && (
              <>
                <div
                  className={`${
                    activeEmpty
                      ? 'quest-entries-active-element-active'
                      : 'quest-entries-active-element'
                  }  flex align-items-center justify-content-center`}
                >
                  <p className={`quest-entries-comment ${activeEmpty === true ? 'warning' : ''} `}>
                    You have no active tasks yet
                    <br />
                    Please, pick the ones you need from the <br />
                    block on the left
                  </p>
                </div>
              </>
            )}
            {activeEmpty === true && activities.length < 1 && (
              <span className="small-comment warning">
                Pick at least 1 task. Up to 15 unique task
              </span>
            )}
          </div>
        </div>
        <div className="admin-align-right quest-entries-btn-group">
          <Button
            label="Back"
            className="p-button-outlined p-button-secondary admin-quest-back-btn"
            onClick={prevTab}
          />
          <Button
            label="Next"
            className="p-button-primary admin-quest-next-btn"
            onClick={nextTab}
          />
        </div>
      </div>
    </>
  );
};

export default JourneyQuestEntries;
