import "./navbar.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <div className='header-right'>
        <Link className='header-link' to='/'>
          Home
        </Link>
        <Link className='header-link' to='user'>
          Profile
        </Link>
        <Link className='header-link' to='/logout'>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;
