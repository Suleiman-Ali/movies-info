import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  text: string;
  to: string;
  isSmall?: boolean;
}

function MyNavLink({ text, to, isSmall = false }: NavLinkProps): JSX.Element {
  const cls = isSmall ? 'navSmall__link' : 'nav__link';
  const withSelected = cls + ' selected';
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? withSelected : cls)}
    >
      {text}
    </NavLink>
  );
}

export default MyNavLink;
