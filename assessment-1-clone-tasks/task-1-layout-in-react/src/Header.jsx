import NavLinks from './NavLinks.jsx';
import logo from '../../assets/logo.svg';

// Site header: centred logo with the navigation underneath
function Header() {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={logo} alt="Erased Tapes logo" />
      <NavLinks label="Main navigation" />
    </header>
  );
}

export default Header;
