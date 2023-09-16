import React from 'react';
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from 'react-dropzone';
import DragDropImg from '../../assets/img/drag_drop.svg';
import DragDropImgEmpty from '../../assets/img/drag_drop_red.svg';
import { Button } from 'primereact/button';

const Dropzone = ({ onDrop, accept, isEmpty, photoEmpty, deleteImg, img }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept,
  });

  const Image = ({ image }) => {
    return (
      <div className="file-item">
        <img src={image.src} className="quest-setup-img" />
      </div>
    );
  };

  // const files = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  return (
    <>
      {!isEmpty ? (
        <>
          <div className="quest-setup-img-containter">
            <Image image={img} />
          </div>
          <div className="flex align-items-center gap-3">
            <Button
              label="Delete"
              severity="secondary"
              className="flex-grow-1 quest-setup-del-btn"
              onClick={deleteImg}
              outlined
            />
            <Button
              label="Update"
              severity="secondary"
              className="flex-grow-1 quest-setup-del-btn"
              onClick={open}
              outlined
            />
            {/* <div className="quest-setup-del-btn">Delete</div>
                          <div className="quest-setup-del-btn">Update</div> */}
          </div>
        </>
      ) : (
        <div
          className={`${photoEmpty ? 'dropzone-div-emtpy' : 'dropzone-div'}`}
          {...getRootProps()}
        >
          <input className="dropzone-input" {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? (
              <p className="dropzone-content">Release to drop the file here</p>
            ) : (
              <>
                <img
                  src={!photoEmpty ? DragDropImg : DragDropImgEmpty}
                  className="drag-drop-element"
                />
                <p>Drag and Drop file, or Browse</p>
                <p className="dropzone-comment drag-drop-element">Support PNG up to 200mb</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropzone;
