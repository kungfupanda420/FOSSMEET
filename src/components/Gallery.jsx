import React from 'react';
import './Gallery.css';
import images from '../images';

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={image} />
          <p>{image}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
