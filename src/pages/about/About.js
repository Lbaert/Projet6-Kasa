import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import './about.scss';

export default function About() {
  return (
    <div className="about">
      <Header />
      <Banner />
      <Collapse />
      <Footer />
    </div>
  );
}
