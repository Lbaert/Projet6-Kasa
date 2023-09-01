import React from 'react';
import './rating.scss';
import filledStarImage from '../../img/vectorFULL.png';
import emptyStarImage from '../../img/vector.png'; 

export default function Rating({ rating }) {
  const maxRating = 5;

  return (
    <div className="rating">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span key={index} className="star">
        {index < rating ? <img src={filledStarImage} alt="Filled Star" /> : <img src={emptyStarImage} alt="Empty Star" />}
      </span>
      ))}
    </div>
  );
}
