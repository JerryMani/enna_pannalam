import React, { useState } from 'react';
import axios from 'axios';
import './Image.css';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // Handle success or show a success message
      } catch (error) {
        // Handle error or show an error message
      }
    }
  };

  return (
  <div className="back">
    <div className="image-upload-form">
      <h2>Matrimony Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-button">Upload Image</button>
      </form>
    </div>
 </div>
  );
};

export default ImageUploadForm;
