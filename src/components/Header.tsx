import Context from '../context';
import Navbar from './Navbar';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefixImg } from '../apis';

function Header(): JSX.Element | null {
  const { popularMovies } = useContext(Context);
  const navigate = useNavigate();

  const index = Math.floor(Math.random() * popularMovies.length);
  if (!popularMovies[index]) return null;
  const movie = popularMovies[index];

  return (
    <header className="header">
      <div className="img__container">
        <img
          src={prefixImg(movie.backdrop_path)}
          alt=""
          className="header__background"
        ></img>

        <div className="img__overlay"></div>
      </div>

      <Navbar />

      <div className="header__boxRow">
        <div className="header__boxColumn">
          <h1 className="header__title">
            {movie.title || movie.original_name}
          </h1>
          <p className="header__text">{movie.overview}</p>
          <button
            className="header__btn"
            onClick={() => navigate(`/movies/${movie.id}`, { state: movie })}
          >
            View
          </button>
        </div>

        <div className="header__imgBox">
          <img
            className="header__img"
            src={prefixImg(movie.poster_path)}
            alt={movie.title || movie.original_name}
          />
          <p className="header__rate">{movie.vote_average}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
