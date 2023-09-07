import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../auth';
import { staticText } from './staticText';

function NavBar({ loggedIn, onLogout }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleLogout = () => {
    logout();
    onLogout();
  };

  const handleDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  };

return (
    <nav>
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {loggedIn ? (
                <div className="relative ml-3">
                  <div>
                    <button type="button" onClick={handleDropdown} className="relative flex rounded-full bg-gray-800 text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="/img/profile.png" alt="profile" />
                    </button>
                  </div>
                  <div className={`${isDropdownVisible ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Profile</a>
                    <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                      <button className="button is-light" onClick={handleLogout}>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </span>
                        <span>{staticText.logout}</span>
                      </button>
                    </div>
                  </div>
                </div>
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
