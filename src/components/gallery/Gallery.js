import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.scss';
import Card from '../card/Card';
import { logementList } from '../../data/data';

export default function Gallery() {
  return (
    <main className="gallery">
      <h2 className="hidden">Nos appartements</h2>
      <div className="card">
        {logementList.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`} className="card-link">
            <Card
              id={logement.id}
              title={logement.title}
              img={logement.cover}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
