import React, { useState } from 'react';
import './carousel.scss';
import previousImage from '../../img/arrow_back_ios-24px 1.png'
import nextImage from '../../img/arrow_forward_ios-24px 1.png'

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
        <img onClick={prevSlide} src={previousImage} className="carousel-button prev" alt="Précédent" />
        )}
      <div className="carousel-content">
        <img src={props.images[currentIndex]} className='imgContent' alt={`Image ${currentIndex}`} />
        {props.images.length > 1 && (
          <div className="image-counter">
            {currentIndex + 1}/{props.images.length}
          </div>
        )}
      </div>
      {props.images.length > 1 && (
        <img onClick={nextSlide} src={nextImage} className="carousel-button next" alt="Suivant" />
      )}
    </div>
  );
}

