import React, { useState, useCallback, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import Dropzone from '../../../../components/client/dropzone';
import cuid from 'cuid';
import Info_Icon from '../../../../assets/img/info.svg';

import { Editor } from 'react-draft-wysiwyg';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convert, ContentState, convertFromHTML } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

const WhiteList = ({ reward, onChangeWhitelist }) => {
  // opened image
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [initialSet, setInitialSet] = useState(false);

  const [whitelist, setWhitelist] = useState({
    type: 'whitelist',
    title: '',
    description: '',
    image: '',
  });

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
      ...whitelist,
      image: '',
    });
  };

  const handleAddImage = (img) => {
    setWhitelist((prevState) => {
      handleChange({ ...prevState, image: img });
      return { ...prevState, image: img };
    });
  };

  const handleChange = (whitelist) => {
    setWhitelist(whitelist);
    onChangeWhitelist(whitelist);
  };

  useEffect(() => {
    setWhitelist(reward);
    if (reward.description && !initialSet) {
      setInitialSet(true);
      setEditorState(() =>
        EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(reward.description)),
        ),
      );
    }
    if (reward.image) {
      setImages([{ id: cuid(), src: reward.image }]);
    }
  }, [reward]);

  return (
    <div className="reward-card-right">
      <p className="title">Whitelist title</p>
      <div className="ipt-text-div">
        <input
          type="text"
          placeholder="Quest title"
          className="ipt_title"
          value={whitelist.title}
          onChange={(e) => handleChange({ ...whitelist, title: e.target.value })}
        />
        <div className="flex flex-row align-items-center gap-2 admin-setup-title">
          <p className="title">Description</p>
          <img src={Info_Icon} />
        </div>
        <Editor
          editorState={editorState}
          onEditorStateChange={(editorState) => {
            setEditorState(editorState);
            handleChange({
              ...whitelist,
              description: stateToHTML(editorState.getCurrentContent()),
            });
          }}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ['blockType', 'inline', 'list', 'image', 'link'],

            blockType: {
              inDropdown: false,
              options: ['H1', 'H2'],
            },
            inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
            list: { inDropdown: false, options: ['unordered', 'ordered'] },
            link: { inDropdown: false, options: ['link'] },
          }}
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
    </div>
  );
};

export default WhiteList;
