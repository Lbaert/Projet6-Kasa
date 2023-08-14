import React from 'react';
import { useLocation } from 'react-router-dom';
import './banner.scss';
import bannerImage from '../../img/banner.png';

export default function Banner() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`banner ${isHomePage ? 'home-banner' : 'about-banner'}`}>
      <img src={bannerImage} alt="banniere" />
      {isHomePage && <h2 className='titleBanner'>Chez vous, partout et ailleurs</h2>}
    </div>
  );
}