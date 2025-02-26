import imdbLogo from "../../assets/img/imdb.svg";
import "./table.css"; 

export const Table = ({ data, onRowClick }) => {
  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();
    window.open(`https://www.imdb.com/title/${imdbID}`, " ");
  };

  return (
    <div className="movie-cards-container">
      {data.map((movie) => (
        <div key={movie.imdbID} className="movie-card" onClick={() => onRowClick(movie)}>
          <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h5>{movie.Title}</h5>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Type:</strong> {movie.Type}</p>
            <button
              type="button"
              className="imdb-btn"
              onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
            >
              Watch on IMDB
              <img src={imdbLogo} alt="IMDB" width={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
