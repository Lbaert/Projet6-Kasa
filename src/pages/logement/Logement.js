import React from 'react';
import Header from '../../components/header/Header';
import Carousel from "../../components/carousel/Carousel";
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import Rating from '../../components/rating/Rating';
import './logement.scss';
import { logementList } from '../../data/data';
import { useParams } from "react-router-dom";

export default function Logement() {
  const { logementId } = useParams();
  const logement = logementList.find(item => item.id === logementId);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Header />
      <Carousel images={logement.pictures} />
      <div className='logement-details'>
        <div className='info-logement'>
          <h1 className='title'>{logement.title}</h1>
          <p className='location'>{logement.location}</p>
          <div className='tags'>
            {logement.tags.map((tag, index) => (
              <div key={index} className='tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='info-host'>
          <div className='host'>
            <div className='name-host'> {logement.host.name}</div>
            <img className='img-host' src={logement.host.picture} alt={logement.host.name} />
          </div>
          <p className='rating'>
            <Rating rating={parseInt(logement.rating)} />
          </p>
        </div>
      </div>
      <div className='collapses'>
        <Collapse title="Description" content= {logement.description} />
        <Collapse title="Équipements" content={logement.equipments.map(equipment => <p key={equipment}>{equipment}</p>)} />      </div>
      <Footer />
    </div>
  );
}

