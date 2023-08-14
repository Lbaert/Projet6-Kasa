import './footer.scss';
import Logo from '../../img/LOGO.png';

export default function Footer() {
  return (
    <footer className="footer">
        <div className='footerContent'>
          <img src={Logo} alt="kasa, location d'appartements" className='logoFooter'/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
}