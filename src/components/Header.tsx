import Context from '../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefixImg } from '../apis';
import Spinner from './Spinner';
import { useState } from 'react';
import { useEffect } from 'react';

function Header(): JSX.Element | null {
  const [backLoaded, setBackLoaded] = useState<boolean>(false);
  const [frontLoaded, setFrontLoaded] = useState<boolean>(false);
  const { popularMovies } = useContext(Context);
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (popularMovies.length > 0)
      setIndex(Math.floor(Math.random() * popularMovies.length));
  }, [popularMovies]);

  const movie = popularMovies[index];
  const notLoaded = !backLoaded && !frontLoaded;
  const notLoadedHide = notLoaded ? 'hide' : '';

  if (!movie)
    return (
      <header className="header">
        {notLoaded && <Spinner cls={'margin-all-30'} />}
      </header>
    );

  if (movie)
    return (
      <header className="header">
        <div className={`img__container ${notLoadedHide}`}>
          <img
            src={prefixImg(movie.backdrop_path)}
            alt=""
            className="header__background"
            onLoad={() => setBackLoaded(true)}
          ></img>

          <div className="img__overlay"></div>
        </div>

        <div className={`header__boxRow ${notLoadedHide}`}>
          <div className="header__boxColumn">
            <h1 className="header__title">
              {movie.title || movie.original_name}
            </h1>
            <p className="header__text">{movie.overview}</p>
            <button
              className="header__btn"
              onClick={() => navigate(`/movie/${movie.id}`, { state: movie })}
            >
              See More
            </button>
          </div>

          <div className="header__imgBox">
            <img
              className="header__img"
              src={prefixImg(movie.poster_path)}
              alt={movie.title || movie.original_name}
              onLoad={() => setFrontLoaded(true)}
            />
            <p className="header__rate">{movie.vote_average}</p>
          </div>
        </div>

        {notLoaded && <Spinner cls={'margin-all-30'} />}
      </header>
    );

  return null;
}

export default Header;
