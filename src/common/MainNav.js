import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MainNav = () => {
  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand to="/" tag={Link}>
          Find Movies
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink to="/Favs" tag={Link}>
              Favorites
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNav;
