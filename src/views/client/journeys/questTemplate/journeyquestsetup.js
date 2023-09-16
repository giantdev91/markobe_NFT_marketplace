import React, { useCallback, useState, useEffect } from 'react';
import Dropzone from '../../../../components/client/dropzone';

// import Switch from "react-switch";
import info_icon from '../../../../assets/img/info.svg';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import cuid from 'cuid';

import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import Soon_Icon from '../../../../assets/img/soon.svg';
import QuestCalendar from '../../../../components/client/quest-setup/quest-calendar';

const JourneyQuestSetup = ({ setTab, quest, onQuestSetup }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState('');
  const [noedate, setNoEDate] = useState(false);
  const handleEDate = (checked) => {
    setNoEDate(checked);
    console.log(checked);
  };
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const [titleEmpty, setTitleEmpty] = useState(false);
  const [descriptionEmpty, setDescriptionEmpty] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const [photoEmpty, setPhotoEmpty] = useState(false);

  // opened image
  const [images, setImages] = useState([]);

  const nextTab = () => {
    if (title === '') {
      setTitleEmpty(true);
    } else {
      setTitleEmpty(false);
    }
    const hasText = editorState.getCurrentContent().hasText();
    if (!hasText) {
      setDescriptionEmpty(true);
    } else {
      setDescriptionEmpty(false);
    }
    if ((startDate == '') | (endDate == '')) {
      setDateEmpty(true);
    } else {
      setDateEmpty(false);
    }

    if (images.length === 0) {
      setPhotoEmpty(true);
    } else {
      setPhotoEmpty(false);
    }

    if (title !== '' && hasText && !((startDate == '') | (endDate == '')) && images.length !== 0) {
      onQuestSetup({
        title: title,
        description: editorState.getCurrentContent().getPlainText(),
        startDate: startDate,
        endDate: endDate,
        image: images[0].src,
      });
      setTab(2);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImages((prevState) => [...prevState, { id: cuid(), src: e.target.result }]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const deleteImg = () => {
    setImages([]);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-row admin-quest-container gap-3">
          <div className="admin-setup-component">
            <div className="admin-setup-component-container">
              <div className="admin-setup-title">
                <p className="title">Title</p>
              </div>
              <div className="ipt-text-div">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Quest title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${titleEmpty ? 'ipt_title_empty' : 'ipt_title'}`}
                  />
                  {titleEmpty ? (
                    <span className="ipt_title_comment">Please, fill title</span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-row align-items-center admin-setup-title">
                  <p className="title">Description</p>
                  <img src={info_icon} />
                </div>
                <div className={`${descriptionEmpty ? 'description-empty' : ''}`}>
                  <Editor
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
                {descriptionEmpty ? (
                  <span className="ipt_title_comment">Please, fill description</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="admin-setup-component">
            <div style={{ height: '100%' }}>
              <div className="admin-setup-title">
                <p className="title">Add picture</p>
              </div>
              {images.length > 0 ? (
                <Dropzone
                  onDrop={onDrop}
                  accept={'image/*'}
                  isEmpty={false}
                  photoEmpty={photoEmpty}
                  img={images[0]}
                  deleteImg={deleteImg}
                />
              ) : (
                <Dropzone
                  onDrop={onDrop}
                  accept={'image/*'}
                  isEmpty={true}
                  photoEmpty={photoEmpty}
                  img={null}
                  deleteImg={deleteImg}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row admin-quest-container gap-3">
          <div className="admin-setup-component">
            <div className="admin-setup-component-container">
              <div className="admin-setup-title">
                <p className="title">Schedule</p>
              </div>
              <div className="flex flex-row justify-content-between date-align-horizontal gap-3">
                <div className="flex-grow-1">
                  <QuestCalendar
                    start={true}
                    value={startDate}
                    onChange={setStartDate}
                    empty={dateEmpty}
                  />

                  {dateEmpty ? (
                    <div>
                      <span className="ipt_title_comment">Please pick dates</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex-grow-1">
                  <QuestCalendar
                    start={false}
                    value={startDate}
                    onChange={setEndDate}
                    empty={dateEmpty}
                  />
                  <div className="flex flex-row-reverse mt-3">
                    <div className="flex align-items-center quest-setup-date-noending-btn w-full">
                      <div className="flex align-items-center">
                        <span className="date-label">No ending date</span>
                        <InputSwitch
                          checked={noedate}
                          onChange={(e) => handleEDate(e.value)}
                          style={{ width: '2.54rem', height: '1.5rem' }}
                        />
                      </div>
                      <img src={Soon_Icon} className="soon_img_setup" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-setup-component noneed"></div>
        </div>

        <div className="admin-quest-next-btn-right">
          {/* <div className="admin-quest-next-btn">Next</div> */}
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

export default JourneyQuestSetup;
