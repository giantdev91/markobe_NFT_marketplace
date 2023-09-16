import React, { useState, useCallback, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import Dropzone from '../../../components/client/dropzone';
import cuid from 'cuid';
import Info_Icon from '../../../assets/img/info.svg';

import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

const WhiteList = ({ onChangeWhitelist }) => {
  // opened image
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

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
        setWhitelist((prevState) => ({
          ...prevState,
          image: e.target.result,
        }));
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const deleteImg = () => {
    setImages([]);
  };

  useEffect(() => {
    onChangeWhitelist(whitelist);
  }, [whitelist]);

  return (
    <div className="reward-card-right">
      <p className="title">Whitelist title</p>
      <div className="ipt-text-div">
        <input
          type="text"
          placeholder="Quest title"
          className="ipt_title"
          onChange={(e) => setWhitelist({ ...whitelist, title: e.target.value })}
        />
        <div className="flex flex-row align-items-center gap-2 admin-setup-title">
          <p className="title">Description</p>
          <img src={Info_Icon} />
        </div>
        <Editor
          onChange={() =>
            setWhitelist({ ...whitelist, description: editorState.getCurrentContent().hasText() })
          }
          editorState={editorState}
          onEditorStateChange={setEditorState}
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
