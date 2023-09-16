import React, { useState, useCallback, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import Dropzone from '../../../../components/client/dropzone';
import cuid from 'cuid';
import { Button } from 'primereact/button';
import Icon1 from '../../../../assets/img/coin/1.svg';
import Icon2 from '../../../../assets/img/coin/2.svg';
import Icon3 from '../../../../assets/img/coin/3.svg';
import Icon4 from '../../../../assets/img/coin/4.svg';
import Icon5 from '../../../../assets/img/coin/5.svg';
import Icon6 from '../../../../assets/img/coin/6.svg';
import Info_Icon from '../../../../assets/img/info.svg';

const NFTs = ({ reward, onChangeNFT }) => {
  const [NFT, setNFT] = useState({
    type: 'nft',
    name: '',
    image: '',
    distribution: '',
    collection: '',
    symbol: '',
    network: '',
  });

  // opened image
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImages((prevState) => [...prevState, { id: cuid(), src: e.target.result }]);
        handleAddImage(e.target.result);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const deleteImg = () => {
    setImages([]);
    handleChange({
      ...NFT,
      image: '',
    });
  };

  const handleAddImage = (img) => {
    setNFT((prevState) => {
      handleChange({ ...prevState, image: img });
      return { ...prevState, image: img };
    });
  };

  const handleChange = (NFT) => {
    setNFT(NFT);
    onChangeNFT(NFT);
  };

  useEffect(() => {
    setNFT(reward);
    if (reward.image) {
      setImages([{ id: cuid(), src: reward.image }]);
    }
  }, [reward]);

  return (
    <div className="reward-card-right">
      <p className="title">NFT</p>
      <div className="field">
        <div className="label-row">
          <label htmlFor="title1" className="block">
            NFT name
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={NFT.name}
          onChange={(e) => handleChange({ ...NFT, name: e.target.value })}
        />
      </div>

      {images.length > 0 ? (
        <Dropzone
          onDrop={onDrop}
          accept={'image/*'}
          isEmpty={false}
          img={images[0]}
          deleteImg={deleteImg}
        />
      ) : (
        <Dropzone
          onDrop={onDrop}
          accept={'image/*'}
          isEmpty={true}
          img={null}
          deleteImg={deleteImg}
        />
      )}

      <div className="field">
        <div className="label-row">
          <label htmlFor="title1" className="block">
            Distribution among winners
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={NFT.distribution}
          onChange={(e) => handleChange({ ...NFT, distribution: e.target.value })}
        />
      </div>
      <div className="field">
        <div className="label-row">
          <label htmlFor="title1" className="block">
            Collection name
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title1"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={NFT.collection}
          onChange={(e) => handleChange({ ...NFT, collection: e.target.value })}
        />
      </div>
      <div className="field">
        <div className="label-row">
          <label htmlFor="title2" className="block">
            NFT name (token symbols)
            <img src={Info_Icon} className="info-icon" />
          </label>
        </div>
        <InputText
          id="title2"
          aria-describedby="username1-help"
          className="ipt-txt"
          value={NFT.symbol}
          onChange={(e) => handleChange({ ...NFT, symbol: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="flex align-items-center justify-content-between gap-2 mb-2">
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'Matic' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'Matic' })}>
            <img src={Icon1} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'ETC' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'ETC' })}>
            <img src={Icon2} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'APT' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'APT' })}>
            <img src={Icon3} />
          </Button>
        </div>
        <div className="flex align-items-center justify-content-between gap-2 mb-2">
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'BSC' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'BSC' })}>
            <img src={Icon4} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'AVAX' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'AVAX' })}>
            <img src={Icon5} />
          </Button>
          <Button
            className={`p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center reward-nft-button ${
              NFT.network === 'OP' ? 'active' : ''
            }`}
            onClick={() => handleChange({ ...NFT, network: 'OP' })}>
            <img src={Icon6} />
          </Button>
        </div>
      </div>
      <div className="deploy-btn flex align-items-center justify-content-center">Deploy</div>
    </div>
  );
};

export default NFTs;
