import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav className="nav">
      <Link to={'/'} className="nav__logo">
        Movies Info
      </Link>

      <div className="nav__links">
        <Link to={'/'} className="nav__link">
          Home
        </Link>

        <Link to={'/movies'} className="nav__link">
          Movies
        </Link>

        <Link to={'/series'} className="nav__link">
          Series
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
