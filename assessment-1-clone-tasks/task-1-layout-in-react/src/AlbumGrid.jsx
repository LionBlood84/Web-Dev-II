import eulogy from '../../assets/eulogy-for-evolution.jpg';
import cell from '../../assets/the-cell.jpg';
import articulation from '../../assets/articulation.jpg';
import allEncores from '../../assets/all-encores.jpg';
import encores2 from '../../assets/encores-2.jpg';

// The first album is the large featured one; the rest fill the 2x2 grid
const albums = [
  { src: eulogy, alt: 'Eulogy for Evolution album cover', featured: true },
  { src: cell, alt: 'The Cell album cover' },
  { src: articulation, alt: 'Articulation album cover' },
  { src: allEncores, alt: 'All Encores album cover' },
  { src: encores2, alt: 'Encores 2 album cover' },
];

function AlbumGrid() {
  return (
    <section className="album-grid" aria-label="Featured albums">
      {albums.map((album) => (
        <figure
          key={album.alt}
          className={`album-grid__item${album.featured ? ' album-grid__item--featured' : ''}`}
        >
          <img src={album.src} alt={album.alt} />
        </figure>
      ))}
    </section>
  );
}

export default AlbumGrid;
