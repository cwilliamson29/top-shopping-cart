import '../assets/css/nav.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLinks } from './data/navLinkData';
import NavBarMobi from './navBar/navMobi';
import NavMainRender from './navBar/navMain';
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

export default function NavBarRender() {
	const [cartView, setCartView] = useState(false);
	return (
		<div className="appNav">
			<div className="navAlertBar">Always free shipping on orders over $37, see details</div>

			<Navbar color="#ffffff" dark expand="lg">
				{/*****SMALLER SCREENS*****/}
				<NavBarMobi NavLinksRender={NavLinksRender} cartView={cartView} setCartView={setCartView} />

				{/*****LARGER SCREENS*****/}
				<NavMainRender NavLinksRender={NavLinksRender} cartView={cartView} setCartView={setCartView} />
			</Navbar>
		</div>
	);
}
