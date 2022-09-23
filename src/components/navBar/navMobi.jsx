import '../../assets/css/nav.css';
import logo from '../../assets/img/logo.png';
import React, { useState } from 'react';
import { Collapse, Input, Row } from 'reactstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleLine, RiMenuFill } from 'react-icons/ri';
import CartViewRender from './cartView';

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
const ActBox = () => {
	return (
		<div className="pt-2 actMobi">
			<div className="actMobiDiv">My Account</div>
			<div className="actMobiDiv">Order History</div>
		</div>
	);
};

export default function NavBarMobi({ NavLinksRender, setCartView, cartView }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const [searchOpen, setSearchOpen] = useState(false);
	const searchToggle = () => {
		setActOpen(false);
		setSearchOpen(!searchOpen);
	};
	const [actOpen, setActOpen] = useState(false);
	const actToggle = () => {
		setSearchOpen(false);
		setActOpen(!actOpen);
	};

	return (
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
					<div className="act" onClick={actToggle}>
						<RiAccountCircleLine size="100%" className="text-light" />
					</div>
					<div className="cartBox" onClick={() => setCartView(!cartView)}>
						<FaShoppingCart size="100%" className="cart-link text-light" />
					</div>
				</div>
				<Collapse isOpen={isOpen} navbar>
					<NavLinksRender />
				</Collapse>
				<Collapse isOpen={searchOpen} navbar>
					<SearchBox />
				</Collapse>
				<Collapse isOpen={actOpen} navbar>
					<ActBox />
				</Collapse>

				<CartViewRender cartView={cartView} setCartView={setCartView} size={'300px'} />
			</Row>
		</div>
	);
}
