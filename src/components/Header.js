import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const Header = () => (
  <header>
    <span className="wrn-logo">
      <i className="material-icons" />
    </span>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Car">
          Car
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Wrench">
          Wrench
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Time">
          Time
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/About">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;

{
  /* <header>
    <span className="wrn-logo">
      <i className="material-icons" />
    </span>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Car">
          Car
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Wrench">
          Wrench
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/components/Time">
          Time
        </NavLink>
      </li>
    </ul>
  </header> */
}
