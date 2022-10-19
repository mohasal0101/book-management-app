import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const Header = () => {
  return (
    <header className='header-white'>
      <h1>Book Management System</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;