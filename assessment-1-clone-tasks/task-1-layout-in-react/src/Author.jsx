import { content } from '../content.js';
import SocialIcons from './SocialIcons.jsx';
import profile from '../../assets/profile_picture.jpg';

// Author section: bio text, round photo and social icons side by side
function Author() {
  return (
    <section className="author">
      <div className="author__text">
        <h2>The Author</h2>
        <p>{content.authorBio}</p>
      </div>
      <img className="author__photo" src={profile} alt="Portrait of the author" />
      <SocialIcons direction="column" />
    </section>
  );
}

export default Author;
