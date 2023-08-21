import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import './home.scss';
import bannerImageHome from '../../img/banner-home.png';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner image={bannerImageHome} />
      <Gallery  />
      <Footer />
    </div>
  );
}
