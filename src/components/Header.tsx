import Context from '../context';
import Spinner from './Spinner';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { prefixImgOriginal, prefixImgW500 } from '../apis';
import { useState } from 'react';
import { useEffect } from 'react';

function Header(): JSX.Element {
  const [backLoaded, setBackLoaded] = useState<boolean>(false);
  const [frontLoaded, setFrontLoaded] = useState<boolean>(false);
  const { popularMovies } = useContext(Context);
  const [index, setIndex] = useState<number>(0);
  const movie = popularMovies[index];
  const notLoaded = !backLoaded && !frontLoaded;
  const notLoadedHide = notLoaded ? 'hide' : '';

  useEffect(() => {
    if (popularMovies.length > 0)
      setIndex(Math.floor(Math.random() * popularMovies.length));
  }, [popularMovies]);

  if (!movie)
    return (
      <header className="header">
        {notLoaded && <Spinner cls={'margin-all-30'} />}
      </header>
    );

  const {
    id,
    backdrop_path,
    title,
    original_name,
    overview,
    poster_path,
    vote_average,
  } = movie;

  return (
    <header className="header">
      <div className={`img__container ${notLoadedHide}`}>
        <img
          src={prefixImgOriginal(backdrop_path)}
          alt=""
          className="header__background"
          onLoad={() => setBackLoaded(true)}
        ></img>

        <div className="img__overlay"></div>
      </div>

      <div className={`header__boxRow ${notLoadedHide}`}>
        <div className="header__boxColumn">
          <h1 className="header__title">{title || original_name}</h1>
          <p className="header__text">{overview}</p>
          <Link className="header__btn" to={`/movie/${id}`} state={movie}>
            See More
          </Link>
        </div>

        <Link className="header__imgBox" to={`/movie/${id}`} state={movie}>
          <img
            className="header__img"
            src={prefixImgW500(poster_path)}
            alt={title || original_name}
            onLoad={() => setFrontLoaded(true)}
          />
          <p className="header__rate">{(+vote_average).toFixed(1)}</p>
        </Link>
      </div>

      {notLoaded && <Spinner cls={'margin-all-30'} />}
    </header>
  );
}

export default Header;
