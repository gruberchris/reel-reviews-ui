import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const MainNav = () => {
  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand to="/" tag={Link}>
          Reel Reviews
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/" tag={Link}>
              <FontAwesomeIcon icon={faSearch} /> Find Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Favs" tag={Link}>
              <FontAwesomeIcon icon={faStar} /> Favorites
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNav;
