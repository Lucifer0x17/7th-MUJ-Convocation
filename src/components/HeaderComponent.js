import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FadeTransform } from 'react-animation-components';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar expand='md' className='active'>
                    <div className='container'>
                        <NavbarToggler className='navbar-light mr-2' onClick={this.toggleNav}><span className='fa fa-bars fa-sm'></span></NavbarToggler>
                        <NavbarBrand className='mr-auto' href='/.home'>
                            <img src="assets/images/muj_logo.png" alt="muj_logo" width='100%' height='auto' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='ml-auto align-items-left' navbar>
                                <NavItem>
                                    <NavLink className='nav-link navtext' to='/home' >HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link navtext' to='/admin' >ADMIN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link navtext' to='/department' >DEPARTMENT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link navtext' to='/student' >STUDENT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className='nav-link navtext contact' href='#contactus' >CONTACT</AnchorLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className='container'>
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'opacity(1)'
                        }}>
                        <div className='row row-content'>
                            <div className='col-12 text-center'>
                                <h1 className='heading'>7th Annual Convocation Manipal University Jaipur</h1>
                            </div>
                        </div>
                    </FadeTransform>
                </div>
            </div>
        )
    }
}

export default Header;