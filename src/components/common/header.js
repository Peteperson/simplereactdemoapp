import React from 'react';
import PropTypes from 'prop-types'
import { Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../resources/EurobankWin10.png';

const Header = ({ loading, authenticated }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt="Eurobank logo" className="logoStyle" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/courses" style={authenticated === 1  ? null : { display: 'none' }}>
            <NavItem eventKey={2}>Courses</NavItem>
          </LinkContainer>
          <LinkContainer to="/users" style={authenticated === 1 ? null : { display: 'none' }}>
            <NavItem eventKey={3}>Users</NavItem>
          </LinkContainer>
          <LinkContainer to="/comments" style={authenticated === 1 ? null : { display: 'none' }}>
            <NavItem eventKey={4}>Comments</NavItem>
          </LinkContainer>
          <LinkContainer to="/schedules" style={authenticated === 1 ? null : { display: 'none' }}>
            <NavItem eventKey={6}>Schedules</NavItem>
          </LinkContainer>
          <LinkContainer to="/actbranches" style={authenticated === 1 ? null : { display: 'none' }}>
            <NavItem eventKey={7}>Active Brc</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={5} title="Help" id="basic-nav-dropdown"
            style={authenticated === 1 ? null : { display: 'none' }}>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.1}>About</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.2}>qwe</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.3}>asd</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.4}>zxc</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem divider />
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.5}>F you too</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.6}>sdf</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          {authenticated === 1 ? <LinkContainer to="/logoff">
            <NavItem eventKey={6}>Log off</NavItem>
          </LinkContainer>
            : <LinkContainer to="/login">
              <NavItem eventKey={7}>Login</NavItem>
            </LinkContainer>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.number.isRequired
};

export default Header;
