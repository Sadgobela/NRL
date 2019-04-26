import React, {useState} from "react";
import './Header.scss';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from '../../../routes';
import PropTypes from "prop-types";
import {LAYOUT_TYPES} from "../../../utils/constants";
function Header({layoutType}) {
    const {setIsOpen, isOpen} = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header header-${layoutType}`}>
            <Navbar color="light" light expand="md">
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
                                <NavLink href="/seattle">Seattle</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link route="/san-jose">
                                <NavLink href="/san-jose">San Jose</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link route="/san-francisco">
                                <NavLink href="/san-francisco">San Francisco</NavLink>
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

export default Header;