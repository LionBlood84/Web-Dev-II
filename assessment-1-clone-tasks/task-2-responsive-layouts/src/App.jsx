import './App.css';
import rogerRabbitPoster from './assets/who-framed-roger-rabbit.jpg';
import hookPoster from './assets/hook.jpg';
import laLaLandPoster from './assets/la-la-land.jpg';
import hiddenFiguresPoster from './assets/hidden-figures.jpg';
import palmSpringsPoster from './assets/palm-springs.jpg';
import barbiePoster from './assets/barbie.jpg';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <span className="logo-text">watch.it</span>
        <nav className="header-nav">
          <a href="#action" className="nav-link">Action</a>
          <a href="#comedy" className="nav-link">Comedy</a>
          <a href="#romance" className="nav-link">Romance</a>
          <a href="#drama" className="nav-link">Drama</a>
        </nav>
        <button className="search-btn">SEARCH</button>
      </div>
    </header>
  );
}

export default function App() {
  const movies = [
    {
      id: 1,
      title: "Who Framed Roger Rabbit (1988)",
      description: "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!",
      poster: rogerRabbitPoster,
    },
    {
      id: 2,
      title: "Hook (1991)",
      description: "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.",
      poster: hookPoster,
    },
    {
      id: 3,
      title: "La La Land (2016)",
      description: "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!",
      poster: laLaLandPoster,
    },
    {
      id: 4,
      title: "Hidden Figures (2016)",
      description: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
      poster: hiddenFiguresPoster,
    },
    {
      id: 5,
      title: "Palm Springs (2020)",
      description: "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.",
      poster: palmSpringsPoster,
    },
    {
      id: 6,
      title: "Barbie (2023)",
      description: "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!",
      poster: barbiePoster,
    },
  ];

  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">
        <div className="cards-container">
          <article className="movie-card card-1">
            <img src={movies[0].poster} alt={movies[0].title} className="card-poster" />
            <div className="card-body card-1-bottom">
              <div className="card-text-wrapper">
                <h2 className="card-title">{movies[0].title}</h2>
                <p className="card-description">{movies[0].description}</p>
              </div>
              <button className="watch-btn hero-btn">
                <span>WATCH<br />NOW</span>
              </button>
            </div>
          </article>

          <div className="middle-row">
            <article className="movie-card">
              <img src={movies[1].poster} alt={movies[1].title} className="card-poster" />
              <div className="card-body">
                <div className="card-text-wrapper">
                  <h2 className="card-title">{movies[1].title}</h2>
                  <p className="card-description">{movies[1].description}</p>
                </div>
                <button className="watch-btn">WATCH NOW</button>
              </div>
            </article>

            <article className="movie-card">
              <img src={movies[2].poster} alt={movies[2].title} className="card-poster" />
              <div className="card-body">
                <div className="card-text-wrapper">
                  <h2 className="card-title">{movies[2].title}</h2>
                  <p className="card-description">{movies[2].description}</p>
                </div>
                <button className="watch-btn">WATCH NOW</button>
              </div>
            </article>
          </div>

          <article className="movie-card card-horizontal">
            <img src={movies[3].poster} alt={movies[3].title} className="card-poster" />
            <div className="card-body">
              <div className="card-text-wrapper">
                <h2 className="card-title">{movies[3].title}</h2>
                <p className="card-description">{movies[3].description}</p>
              </div>
              <button className="watch-btn">WATCH NOW</button>
            </div>
          </article>

          <article className="movie-card card-horizontal">
            <img src={movies[4].poster} alt={movies[4].title} className="card-poster" />
            <div className="card-body">
              <div className="card-text-wrapper">
                <h2 className="card-title">{movies[4].title}</h2>
                <p className="card-description">{movies[4].description}</p>
              </div>
              <button className="watch-btn">WATCH NOW</button>
            </div>
          </article>

          <article className="movie-card card-horizontal">
            <img src={movies[5].poster} alt={movies[5].title} className="card-poster" />
            <div className="card-body">
              <div className="card-text-wrapper">
                <h2 className="card-title">{movies[5].title}</h2>
                <p className="card-description">{movies[5].description}</p>
              </div>
              <button className="watch-btn">WATCH NOW</button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}