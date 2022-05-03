import MyNavLink from './NavLink';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  POPULAR_MOVIES_PATHS,
  TOP_MOVIES_PATHS,
  POPULAR_SERIES_PATHS,
  TOP_SERIES_PATHS,
} from '../data/index';

function Navbar(): JSX.Element | null {
  const [model, setModel] = useState<boolean>(false);
  const [isSmall, setIsSmall] = useState<boolean>(
    window.innerWidth > 1000 ? false : true
  );

  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth > 1000 ? false : true);
    window.addEventListener<'resize'>('resize', onResize);
    return () => window.removeEventListener<'resize'>('resize', onResize);
  }, []);

  if (!isSmall)
    return (
      <nav className={`nav`}>
        <Link to={'/'} className="nav__logo">
          Movies Info
        </Link>

        <div className="nav__links">
          <MyNavLink text="Home" to="/" />
          <MyNavLink text="Popular_Movies" to={POPULAR_MOVIES_PATHS.typeTo} />
          <MyNavLink text="Top_Movies" to={TOP_MOVIES_PATHS.typeTo} />
          <MyNavLink text="Popular_TV" to={POPULAR_SERIES_PATHS.typeTo} />
          <MyNavLink text="Top_TV" to={TOP_SERIES_PATHS.typeTo} />
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
            <MyNavLink text="Home" to="/" isSmall={true} />
            <MyNavLink
              text="Popular_Movies"
              to={POPULAR_MOVIES_PATHS.typeTo}
              isSmall={true}
            />
            <MyNavLink
              text="Top_Movies"
              to={TOP_MOVIES_PATHS.typeTo}
              isSmall={true}
            />
            <MyNavLink
              text="Popular_TV"
              to={POPULAR_SERIES_PATHS.typeTo}
              isSmall={true}
            />
            <MyNavLink
              text="Top_TV"
              to={TOP_SERIES_PATHS.typeTo}
              isSmall={true}
            />
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
