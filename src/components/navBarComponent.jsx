import '../assets/css/nav.css';
import logo from '../assets/img/logo.png';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Button, Input, Row, Col } from 'reactstrap';
import { NavLinks } from './data/navLinkData';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleLine, RiMenuFill } from 'react-icons/ri';
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
		</div>
	);
};
const SearchBox = () => {
	return (
		<div className="pt-2 searchMobi">
			<div className="searchIcon">
				<FaSearch size="1em" style={{ color: 'red' }} />
			</div>
			<div className="searchInput">
				<Input type="text" placeholder="Search" className="navSearchBar" />
			</div>
		</div>
	);
};
export default function NavBarRender() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const [searchOpen, setSearchOpen] = useState(false);
	const searchToggle = () => setSearchOpen(!searchOpen);

	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>

			<Navbar color="#ffffff" dark expand="lg">
				{/*****SMALLER SCREENS*****/}
				<div className="container-fluid d-lg-none">
					<Row className="flex-row justify-content-around">
						<div className="menuIcon">
							<RiMenuFill onClick={toggle} size="100%" className="text-light ml-auto" />
						</div>
						<div className="imgBar">
							<a href="/">
								<img width="100%" height="auto" className="img-responsive" src={logo} alt="Logo" />
							</a>
						</div>
						<div className="justify-content-end iconContainer">
							<div className="searchSm" onClick={searchToggle}>
								<FaSearch size="100%" className="text-light" />
							</div>
							<div className="act">
								<RiAccountCircleLine size="100%" className="text-light" />
							</div>
							<div className="cartBox">
								<FaShoppingCart size="100%" className="cart-link text-light" />
							</div>
						</div>
						<Collapse isOpen={isOpen} navbar>
							<NavLinksRender />
						</Collapse>
						<Collapse isOpen={searchOpen} navbar>
							<SearchBox />
						</Collapse>
					</Row>
				</div>

				{/*****LARGER SCREENS*****/}
				<div className="container">
					<Row className="d-none d-sm-none d-md-none d-lg-flex">
						<Col md={5} className="d-flex justify-content-end">
							<NavbarBrand href="/">
								<img width="100%" height="auto" className="img-responsive" src={logo} alt="Logo" />
							</NavbarBrand>
						</Col>
						<Col md={7}>
							<Row>
								<div className="navSearch col-5">
									<div className="searchIcon">
										<FaSearch size="1em" style={{ color: 'red' }} />
									</div>
									<div className="searchInput">
										<Input type="text" placeholder="Search" className="navSearchBar" />
									</div>
								</div>
								<div className="navAccount hover text-center">
									<div className="text-light text-nowrap">
										<RiAccountCircleLine size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
										My Account
									</div>
								</div>
								<div className="navCart hover text-center">
									<div className="text-light text-nowrap">
										<FaShoppingCart size="30px" style={{ paddingRight: '10px' }} className="cart-link" />
										<span className="badge badge-warning" id="lblCartCount">
											0
										</span>
										Cart
									</div>
								</div>
							</Row>
						</Col>
						<NavLinksRender />
					</Row>
				</div>

				<Row className="d-none d-xs-none d-sm-none d-md-none d-lg-flex"></Row>
			</Navbar>
		</div>
	);
}
