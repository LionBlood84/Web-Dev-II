import Button from './Button.jsx';

const genres = ['Action', 'Comedy', 'Romance', 'Drama'];

// Header: logo, genre navigation (hidden on mobile) and search button
function Header() {
  return (
    <header className="site-header">
      <h1 className="site-header__logo">watch.it</h1>
      <nav className="site-header__nav" aria-label="Genres">
        <ul>
          {genres.map((genre) => (
            <li key={genre}>
              <a href={`#${genre.toLowerCase()}`}>{genre}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button>SEARCH</Button>
    </header>
  );
}

export default Header;
