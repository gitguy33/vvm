import React from 'react';
import './location_page.css';

export const Location = () => {
  const imageCount = 6; // Adjust based on your actual image count
  const images = Array.from({ length: imageCount }, (_, i) => `/assets/image${i + 1}.jpg`);

  return (
    <div className="location-carousel">
      <h2 className="gallery-title">📍 Our Sacred Spaces</h2>
      <p className="gallery-subtitle">Scroll through the vibrant locations where tradition meets craftsmanship.</p>

      <div className="carousel-container">
        {images.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Location ${index + 1}`} className="carousel-image" />
            <p className="image-label"></p>{/*use this part to explain each locations*/}
          </div>
        ))}
      </div>
    </div>
  );
};