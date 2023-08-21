import React from 'react';
import { useLocation } from 'react-router-dom';
import './banner.scss';

export default function Banner(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`banner ${isHomePage ? 'home-banner' : 'about-banner'}`}>
      <img src={props.image} alt="banniere" />
      {isHomePage && <h2 className='titleBanner'>Chez vous, partout et ailleurs</h2>}
    </div>
  );
}