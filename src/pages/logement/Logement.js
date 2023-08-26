import Header from '../../components/header/Header';
import Carousel from "../../components/carousel/Carousel";
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import './logement.scss';
import { logementList } from '../../data/data'
import { useParams } from "react-router-dom";

export default function Logement()

{
  const InfoURL = useParams ();
  const logement = logementList.find (ListeLogements => ListeLogements.id === InfoURL.logementId);
  const image = logement.pictures

  console.log(image)
  return (
    <div className="logement">
      <Header />
      <Carousel
        images={logement.pictures} 
      />
      <Collapse title="test" content="test" />
      <Collapse title="test" content="test" />
      <Footer />
    </div>
  );
}
