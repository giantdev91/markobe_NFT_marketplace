import React from 'react';
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from 'react-dropzone';
import DragDropImg from '../../assets/img/drag_drop.svg';
import DragDropImgEmpty from '../../assets/img/drag_drop_red.svg';
import { Button } from 'primereact/button';

const Dropzone2 = ({ onDrop, accept, isEmpty, photoEmpty, deleteImg, img }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept,
  });

  const Image = ({ image }) => {
    return (
      <div className="file-item">
        <img src={image.src} className="quest-setup-img" />
        <span className="pi pi-times img-delete" onClick={deleteImg} />
      </div>
    );
  };

  return (
    <>
      <div className={`${photoEmpty ? 'dropzone-div-emtpy' : 'dropzone-div'}`} {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
        <div className="text-center dropzone-text">
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

      {!isEmpty && (
        <>
          <div className="quest-setup-img-containter">
            <Image image={img} />
          </div>
        </>
      )}
    </>
  );
};

export default Dropzone2;
