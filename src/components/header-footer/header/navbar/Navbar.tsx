import { Link } from 'react-router-dom'
import { navLinks } from '../../../../routes/navLinks'
import style from './Navbar.module.css'

interface Props {
  directionRow?: boolean;
  alignItems?: 'items-center' | 'items-start' | 'items-end';
}

export default function Navbar({ directionRow = true, alignItems = 'items-center' }: Props) {
  return (
    <nav className={style.nav}>
      <ul
        className={`${style.ul} ${directionRow ? 'flex-row' : 'flex-col'}  ${alignItems} `}
      >
        {navLinks
          .map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
