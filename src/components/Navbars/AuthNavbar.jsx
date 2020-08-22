import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

import { Images } from '../../constants';

export default function AdminNavbar() {
  return (
    <Navbar
      className="navbar-top navbar-horizontal navbar-dark"
      expand="md"
    >
      <Container className="px-4">
        <NavbarBrand to="/" tag={Link}>
          <img alt="..." src={Images.LogoBranca330px} style={{ width: 140, height: 140 }} />
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar-collapse-main" type="submit">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={Images.ArgonLogo}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  id="navbar-collapse-main"
                  type="submit"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link-icon" to="/" tag={Link}>
                <span className="nav-link-inner--text">Início</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-icon" to="/" tag={Link}>
                <span className="nav-link-inner--text">Dashboard</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                to="/auth/register"
                tag={Link}
              >
                <span className="nav-link-inner--text">Register</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                to="/auth/login"
                tag={Link}
              >
                <span className="nav-link-inner--text">Login</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                to="/admin/user-profile"
                tag={Link}
              >
                <span className="nav-link-inner--text">Perfil</span>
              </NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}
