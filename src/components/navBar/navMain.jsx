import '../../assets/css/nav.css';
import logo from '../../assets/img/logo.png';
import React from 'react';
import { NavbarBrand, Input, Row, Col } from 'reactstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';
import CartViewRender from './cartView';

export default function NavMainRender({ NavLinksRender, setCartView, cartView }) {
	return (
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
						<div className="navCart hover text-center" onClick={() => setCartView(!cartView)}>
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
				<CartViewRender cartView={cartView} setCartView={setCartView} size={'450px'} />
			</Row>
		</div>
	);
}
