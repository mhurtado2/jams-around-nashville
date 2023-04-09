import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
// import logo from '../../assets/logo.png'

export const NavBar = () => {
  const navigate = useNavigate()
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
      

         {localStorage.getItem("jam_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("jam_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
       
      ) : (
        ""
      )}
    </ul>
  );
};