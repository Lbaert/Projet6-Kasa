import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './notFound.scss';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="notFound">
      <Header />
      <main>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
        Retourner sur la page d’accueil
          </Link>
      </main>
      <Footer />
    </div>
  );
}
