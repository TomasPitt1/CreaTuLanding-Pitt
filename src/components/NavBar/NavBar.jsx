import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css";

function NavBar() {
  return (
    <nav className='navbar'>
      <h1 className="navbar-logo">
        <Link to="/">TEKI</Link>
      </h1>


      <ul className="navbar-links">
        <li><Link to="/categoria/0 a 2 meses">0 a 2 meses</Link></li>
        <li><Link to="/categoria/3 a 5 meses">3 a 5 meses</Link></li>
        <li><Link to="/categoria/6 a 8 meses">6 a 8 meses</Link></li>
      </ul>


      <CartWidget />
    </nav>
  );
}

export default NavBar;