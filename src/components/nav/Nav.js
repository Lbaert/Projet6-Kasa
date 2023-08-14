import './nav.scss';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';


export default function Nav() {
  const location = useLocation();

  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}