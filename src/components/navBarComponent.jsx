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
			<NavLink href={props.path} className="text-light nav-links px-3 text-nowrap">
				{props.name}
			</NavLink>
		</NavItem>
	);
};
const NavLinksRender = () => {
	return (
		<div className="nav-bar nav">
			<Nav className="me-auto" navbar>
				{NavLinks.map((item, i) => {
					return <NavRender key={uniqid()} name={item.name} path={item.path} />;
				})}
			</Nav>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink className="text-light nav-links px-3 cart-link text-nowrap">
						<FaShoppingCart size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
						<span className="badge badge-warning" id="lblCartCount">
							0
						</span>
						Cart
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};
export default function NavBarRender() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>
			<div className="container-xxl">
				<Navbar color="#ffffff" dark expand="lg">
					<div className="container">
						{/*****SMALLER SCREENS*****/}
						<Row className="d-lg-none">
							<Col className="col-xs-2 col-sm-2 col-md-1">
								<NavbarToggler onClick={toggle} className="text-light ml-auto" />
							</Col>
							<Col className="d-flex justify-content-end col-10">
								<NavbarBrand href="/">
									<img width="100%" height="auto" className="img-responsive" src={logo} alt="Logo" />
								</NavbarBrand>
							</Col>
							<Col className="col-12">
								<Row>
									<div className="navSearch col-6">
										<div className="searchIcon">
											<FaSearch size="1em" style={{ color: 'red' }} />
										</div>
										<div className="searchInput">
											<Input type="text" placeholder="Search" className="navSearchBar" />
										</div>
									</div>
									<div className="col-2">
										<NavItem className="navbar-nav">
											<NavLink className="text-light nav-links px-3 cart-link text-nowrap">
												<RiAccountCircleLine size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
												My Account
											</NavLink>
										</NavItem>
									</div>
								</Row>
							</Col>
							<Collapse isOpen={isOpen} navbar>
								<NavLinksRender />
							</Collapse>
						</Row>
						{/*****LARGER SCREENS*****/}
						<Row className="d-none d-sm-none d-md-none d-lg-flex">
							<Col md={6} className="d-flex justify-content-end">
								<NavbarBrand href="/">
									<img width="100%" height="auto" className="img-responsive" src={logo} alt="Logo" />
								</NavbarBrand>
							</Col>
							<Col md={6}>
								<Row>
									<div className="navSearch col-6">
										<div className="searchIcon">
											<FaSearch size="1em" style={{ color: 'red' }} />
										</div>
										<div className="searchInput">
											<Input type="text" placeholder="Search" className="navSearchBar" />
										</div>
									</div>
									<div className="col-2">
										<NavItem className="navbar-nav">
											<NavLink className="text-light nav-links px-3 cart-link text-nowrap">
												<RiAccountCircleLine size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
												My Account
											</NavLink>
										</NavItem>
									</div>
								</Row>
							</Col>
						</Row>

						<Row className="d-none d-xs-none d-sm-none d-md-none d-lg-flex">
							<NavLinksRender />
						</Row>
					</div>
				</Navbar>
			</div>
		</div>
	);
}
