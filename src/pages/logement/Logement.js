import Header from '../../components/header/Header';
import Carousel from "../../components/carousel/Carousel";
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import './logement.scss';

export default function Logement() {
  return (
    <div className="logement">
      <Header />
      <Carousel />
      <Collapse />
      <Footer />
    </div>
  );
}
