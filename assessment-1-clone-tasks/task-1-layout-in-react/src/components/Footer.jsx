import { content } from '../content.js';
import NavLinks from './NavLinks.jsx';
import SocialIcons from './SocialIcons.jsx';

// Full-width dark footer: navigation, copyright notice and social icons
function Footer() {
  return (
    <footer className="site-footer">
      <NavLinks label="Footer navigation" />
      <p>{content.copyright}</p>
      <SocialIcons direction="row" />
    </footer>
  );
}

export default Footer;
