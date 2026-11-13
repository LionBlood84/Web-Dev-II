import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram-icon.svg';
import twitter from '../../assets/twitter-icon.svg';

const icons = [
  { name: 'Facebook', src: facebook, href: 'https://www.facebook.com' },
  { name: 'Instagram', src: instagram, href: 'https://www.instagram.com' },
  { name: 'Twitter', src: twitter, href: 'https://www.twitter.com' },
];

// direction: "column" (author section) or "row" (footer)
function SocialIcons({ direction = 'row' }) {
  return (
    <ul className={`social-icons social-icons--${direction}`}>
      {icons.map((icon) => (
        <li key={icon.name}>
          <a href={icon.href} aria-label={icon.name}>
            <img src={icon.src} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
