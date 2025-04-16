import React, { useState } from 'react';
import './TravelGallery.css';

function TravelGallery() {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      const newPhotos = files.map(file => ({
        id: Date.now() + Math.random(),
        url: URL.createObjectURL(file),
        title: file.name.split('.')[0],
        date: new Date().toLocaleDateString()
      }));

      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
      setUploading(false);
    }, 1000);
  };

  const removePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="travel-gallery">
      <h1>Travel Gallery</h1>
      
      <div className="upload-section">
        <label className="upload-button">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            style={{ display: 'none' }}
          />
          <i className="fas fa-cloud-upload-alt"></i>
          Upload Photos
        </label>
        {uploading && <p className="uploading-text">Uploading...</p>}
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <div className="photo-container">
              <img src={photo.url} alt={photo.title} />
              <button 
                className="remove-photo"
                onClick={() => removePhoto(photo.id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>Uploaded: {photo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelGallery; 