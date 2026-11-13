import Button from './Button.jsx';

// One movie card. `variant` ("featured" | "standard" | "wide") only changes
// the layout on desktop; on mobile and tablet every card looks the same (see index.css).
function MovieCard({ movie, variant }) {
  return (
    <article className={`card card--${variant}`}>
      <img className="card__poster" src={movie.poster} alt={`${movie.title} poster`} />
      <div className="card__body">
        <div className="card__text">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
        <Button className="card__button">WATCH NOW</Button>
      </div>
    </article>
  );
}

export default MovieCard;
