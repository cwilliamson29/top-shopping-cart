import '../assets/css/nav.css';
import logo from '../assets/img/logo.png';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Button, Input, Row, Col } from 'reactstrap';
import { NavLinks } from './data/navLinkData';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';
import uniqid from 'uniqid';

const NavRender = (props) => {
	return (
		<NavItem>
			<NavLink href={props.path} className="text-light nav-links px-3">
				{props.name}
			</NavLink>
		</NavItem>
	);
};
export default function NavBarRender() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>
			<div className="container">
				<Navbar color="#ffffff" dark expand="md">
					<div className="container">
						<Row>
							<Col md={4} className="d-flex justify-content-end">
								<NavbarBrand href="/">
									<img width="100%" height="auto" className="img-responsive" src={logo} alt="Logo" />
								</NavbarBrand>
							</Col>
							<Col>
								<Col md={8}>
									<div className="navSearch">
										<div className="searchIcon">
											<FaSearch size="1em" style={{ color: 'red' }} />
										</div>
										<div className="searchInput">
											<Input type="text" placeholder="Search" className="navSearchBar" />
										</div>
									</div>
								</Col>
							</Col>
						</Row>

						<Row>
							<div>
								<NavbarToggler onClick={toggle} className="text-light" />

								<Collapse isOpen={isOpen} navbar>
									<Nav className="me-auto" navbar>
										{NavLinks.map((item, i) => {
											return <NavRender key={uniqid()} name={item.name} path={item.path} />;
										})}
									</Nav>
									<Nav className="ml-auto" navbar>
										<NavItem>
											<NavLink className="text-light nav-links px-3 cart-link">
												<FaShoppingCart size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
												Cart
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink className="text-light nav-links px-3 cart-link">
												<RiAccountCircleLine size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
												My Account
											</NavLink>
										</NavItem>
									</Nav>
								</Collapse>
							</div>
						</Row>
					</div>
				</Navbar>
			</div>
		</div>
	);
}
