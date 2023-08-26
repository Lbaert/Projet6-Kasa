import './header.scss';
import Logo from '../../img/LOGO.png';
import Nav from '../nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img className='logo' src={Logo} alt="kasa, location d'appartements" />
      </h1>
      <Nav />
    </header>
  );
}
