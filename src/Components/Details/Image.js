import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Image.css';

function Image() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    axios
      .post('http://localhost:3000/upload', formData)
      .then((response) => {
        setUploadStatus(response.data.message);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        setUploadStatus('Failed to upload image');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="upload-files-container">
        <div className="drag-file-area">
          <span className="material-icons-outlined upload-icon">file_upload</span>
          <h3 className="dynamic-message">Drag & drop your photo here</h3>
          <label className="label">
            or
            <span className="browse-files">
              <input type="file" className="default-file-input" onChange={handleFileChange} />
              <span className="browse-files-text">browse file</span>
              <span>from device</span>
            </span>
          </label>
        </div>
        <span className="cannot-upload-message">
          <span className="material-icons-outlined">error</span> Please select a file first{' '}
          <span className="material-icons-outlined cancel-alert-button">cancel</span>
        </span>
        <div className="file-block">
          <div className="file-info">
            <span className="material-icons-outlined file-icon">description</span>
            <span className="file-name">{selectedFile ? selectedFile.name : ''}</span> |{' '}
            <span className="file-size">
              {selectedFile ? (selectedFile.size / 1024).toFixed(1) + ' KB' : ''}
            </span>
          </div>
          <span className="material-icons remove-file-icon">delete</span>
          <div className="progress-bar"></div>
        </div>
        <button type="submit" className="upload-button">
          Upload
        </button>
        <div className="upload-status">{uploadStatus}</div>
      </div>
    </form>
  );
}

export default Image;
