import React from 'react';
import './rating.scss';

export default function Rating({ rating }) {
  const maxRating = 5;

  return (
    <div className="rating">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}
