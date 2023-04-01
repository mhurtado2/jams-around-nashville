import { Link } from 'react-router-dom'
import './NavBar.css'
// import logo from '../../assets/logo.png'

export const NavBar = () => {
  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        <img className="logo__img" src="" alt="Jams Around Nashville" />
      </Link>
      <li className="navbar__item">
        <Link className="navbar__link" to="/blues">
          Blues
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/country">
          Country
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/jazz">
          Jazz
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/rbandsoul">
          R and B 
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/new">
          New Jam
        </Link>
        </li>
        <li className="navbar__item">
        </li>
        <li className="navbar__item">
        <Link className="navbar__link" to="">
         Log Out 
        </Link>
      </li>
    </ul>
  )
}