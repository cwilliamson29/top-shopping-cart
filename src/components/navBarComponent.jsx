import '../assets/css/nav.css';
import logo from '../assets/img/logo.png';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Container, Nav, NavItem, NavLink, Form, Button, Input, Row, Col } from 'reactstrap';
import { NavLinks } from './data/navLinkData';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';
import uniqid from 'uniqid';

const NavRender = (props) => {
	return (
		<li href={props.path} className="text-nowrap">
			{props.name}
		</li>
	);
};

export default function NavBarRender() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	if (isOpen) {
	}

	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>
			<nav id="navbar" class="inactive">
				<div id="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="container">
					<div id="linkWrapper">
						<div id="respMenu">
							asdf
							<img src="https://github.com/cwilliamson29/NO-BS_Libraries/blob/de2feb7017526b56c55b66f62a8383c86f4d4149/NavBar/css/hamburger-menu.png" alt="l" />
						</div>
						<ul id="navLinks">
							{NavLinks.map((item, i) => {
								return <NavRender key={uniqid()} name={item.name} path={item.path} />;
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
