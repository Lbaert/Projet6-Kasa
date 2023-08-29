import React, { useState } from 'react';
import './carousel.scss';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % props.images.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + props.images.length) % props.images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      {props.images.length > 1 && (
        <button onClick={prevSlide} className="carousel-button prev">
          &lt;
        </button>
      )}
      <div className="carousel-content">
        <img src={props.images[currentIndex]} alt={`Image ${currentIndex}`} />
        {props.images.length > 1 && (
          <div className="image-counter">
            {currentIndex + 1}/{props.images.length}
          </div>
        )}
      </div>
      {props.images.length > 1 && (
        <button onClick={nextSlide} className="carousel-button next">
          &gt;
        </button>
      )}
    </div>
  );
}

