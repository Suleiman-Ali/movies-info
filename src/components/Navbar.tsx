import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  POPULAR_MOVIES_PATHS,
  TOP_MOVIES_PATHS,
  POPULAR_SERIES_PATHS,
  TOP_SERIES_PATHS,
} from '../data/index';

function Navbar(): JSX.Element | null {
  const { pathname } = useLocation();
  const [isSmall, setIsSmall] = useState<boolean>(
    window.innerWidth > 1000 ? false : true
  );
  const [model, setModel] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth > 1000 ? false : true);
    window.addEventListener<'resize'>('resize', onResize);
    return () => window.removeEventListener<'resize'>('resize', onResize);
  }, []);

  let number = -1;
  if (pathname === '/') number = 0;
  if (pathname === POPULAR_MOVIES_PATHS.typeTo) number = 1;
  if (pathname === TOP_MOVIES_PATHS.typeTo) number = 2;
  if (pathname === POPULAR_SERIES_PATHS.typeTo) number = 3;
  if (pathname === TOP_SERIES_PATHS.typeTo) number = 4;

  if (!isSmall)
    return (
      <nav className={`nav`}>
        <Link to={'/'} className="nav__logo">
          Movies Info
        </Link>

        <div className="nav__links">
          <Link
            to={'/'}
            className={`nav__link ${number === 0 ? 'selected' : ''}`}
          >
            Home
          </Link>

          <Link
            to={POPULAR_MOVIES_PATHS.typeTo}
            className={`nav__link ${number === 1 ? 'selected' : ''}`}
          >
            Popular_Movies
          </Link>

          <Link
            to={TOP_MOVIES_PATHS.typeTo}
            className={`nav__link ${number === 2 ? 'selected' : ''}`}
          >
            Top_Movies
          </Link>

          <Link
            to={POPULAR_SERIES_PATHS.typeTo}
            className={`nav__link ${number === 3 ? 'selected' : ''}`}
          >
            Popular_TV
          </Link>

          <Link
            to={TOP_SERIES_PATHS.typeTo}
            className={`nav__link ${number === 4 ? 'selected' : ''}`}
          >
            Top_TV
          </Link>
        </div>
      </nav>
    );

  if (isSmall)
    return (
      <nav className={`navSmall`}>
        <Link to={'/'} className="navSmall__logo">
          Movies Info
        </Link>

        <i
          className="bi bi-list navSmall__open"
          onClick={() => setModel(true)}
        ></i>

        {model && (
          <div className="navSmall__model">
            <Link
              to={'/'}
              className={`navSmall__link ${number === 0 ? 'selected' : ''}`}
            >
              Home
            </Link>

            <Link
              to={POPULAR_MOVIES_PATHS.typeTo}
              className={`navSmall__link ${number === 1 ? 'selected' : ''}`}
            >
              Popular_Movies
            </Link>

            <Link
              to={TOP_MOVIES_PATHS.typeTo}
              className={`navSmall__link ${number === 2 ? 'selected' : ''}`}
            >
              Top_Movies
            </Link>

            <Link
              to={POPULAR_SERIES_PATHS.typeTo}
              className={`navSmall__link ${number === 3 ? 'selected' : ''}`}
            >
              Popular_TV
            </Link>

            <Link
              to={TOP_SERIES_PATHS.typeTo}
              className={`navSmall__link ${number === 4 ? 'selected' : ''}`}
            >
              Top_TV
            </Link>
            <i
              className="bi bi-x-lg navSmall__close"
              onClick={() => setModel(false)}
            ></i>
          </div>
        )}
      </nav>
    );

  return null;
}

export default Navbar;
