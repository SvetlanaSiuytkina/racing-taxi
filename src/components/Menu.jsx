import { NavLink } from 'react-router';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/drift', label: 'Дрифт-такси' },
  { to: '/timeattack', label: 'Time Attack' },
  { to: '/forza', label: 'Forza Karting' },
];

const linkClass = ({ isActive }) =>
  isActive ? 'menu__item menu__item-active' : 'menu__item';

function Menu() {
  return (
    <nav className='menu'>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={linkClass}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;