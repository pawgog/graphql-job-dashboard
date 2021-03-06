import { Link } from 'react-router-dom';
import { logout } from '../auth';
import { staticText } from './staticText';

function NavBar({ loggedIn, onLogout }) {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          <span className="icon mr-1">
            <i className="fas fa-home"></i>
          </span>
          <span>{staticText.home}</span>
        </Link>
        {loggedIn && (
        <Link className="navbar-item" to="/jobs/new">
          <span className="icon mr-1">
            <i className="fa-solid fa-file-circle-plus"></i>
          </span>
          <span>{staticText.addJob}</span>
        </Link>
        )}
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {loggedIn ? (
                <button className="button is-light" onClick={handleLogout}>
                <span className="icon">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
                <span>{staticText.logout}</span>
                </button>
            ) : (
              <Link className="button is-link is-light" to="/login">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </span>
                <span>{staticText.login}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
