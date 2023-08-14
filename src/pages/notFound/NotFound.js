import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './notFound.scss';

export default function NotFound() {
  return (
    <div className="notFound">
      <Header />
      <main>
        <p>error</p>
      </main>
      <Footer />
    </div>
  );
}
