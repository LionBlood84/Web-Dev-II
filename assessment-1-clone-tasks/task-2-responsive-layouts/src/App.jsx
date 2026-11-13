import Header from './components/Header.jsx';
import MovieCard from './components/MovieCard.jsx';
import { movies } from './movies.js';

// Decides which desktop layout a card uses, based on its position in the list:
// 1st = featured (wide, poster on top), 2nd-3rd = standard, 4th-6th = wide (poster on left)
function getVariant(index) {
  if (index === 0) return 'featured';
  if (index >= 3) return 'wide';
  return 'standard';
}

function App() {
  return (
    <>
      <Header />
      <main className="content">
        {movies.map((movie, index) => (
          <MovieCard key={movie.title} movie={movie} variant={getVariant(index)} />
        ))}
      </main>
    </>
  );
}

export default App;
