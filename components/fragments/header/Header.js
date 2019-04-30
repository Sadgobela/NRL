import React, {useState} from "react";
import './Header.scss';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from '../../../routes';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {LAYOUT_TYPES} from "../../../utils/constants";
import {setActiveRoute} from "../../../store/actions/routerActions";
import {bindActionCreators} from "redux";

function Header({layoutType, activeRoute}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header header-${layoutType}`}>
      <Navbar light expand="md">
        <Link route="/">
          <NavbarBrand href="/">
            <img src="/static/img/logo.png" alt="NRL"/>
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link route="/seattle">
                <NavLink active={activeRoute === '/seattle'} href="/seattle">Seattle</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link route="/san-jose">
                <NavLink active={activeRoute === '/san-jose'} href="/san-jose">San Jose</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link route="/san-francisco">
                <NavLink active={activeRoute === '/san-francisco'} href="/san-francisco">San Francisco</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  layoutType: PropTypes.oneOf(Object.values(LAYOUT_TYPES)).isRequired
};

const mapStateToProps = state => ({
  activeRoute: state.router.activeRoute,
});

export default connect(mapStateToProps)(Header);